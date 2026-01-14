<?php

declare(strict_types=1);

use App\Models\Lead;
use App\Models\User;

test('guests are redirected to the login page when accessing leads', function (): void {
    $this->get(route('leads.index'))->assertRedirect(route('login'));
});

test('authenticated users can visit the leads index page', function (): void {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(route('leads.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('leads/index')
            ->has('leads')
            ->has('filters'));
});

test('users can only see their own leads', function (): void {
    $user1 = User::factory()->create();
    $user2 = User::factory()->create();

    // Create leads for both users
    Lead::factory()->count(5)->create(['user_id' => $user1->id]);
    Lead::factory()->count(3)->create(['user_id' => $user2->id]);

    $this->actingAs($user1)
        ->get(route('leads.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('leads/index')
            ->has('leads.data', 5)
            ->where('leads.total', 5));
});

test('leads are paginated with 10 items per page', function (): void {
    $user = User::factory()->create();
    Lead::factory()->count(25)->create(['user_id' => $user->id]);

    $this->actingAs($user)
        ->get(route('leads.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('leads/index')
            ->has('leads.data', 10)
            ->where('leads.per_page', 10)
            ->where('leads.total', 25)
            ->where('leads.current_page', 1)
            ->where('leads.last_page', 3));
});

test('leads are ordered by created_at descending', function (): void {
    $user = User::factory()->create();

    $oldestLead = Lead::factory()->create([
        'user_id' => $user->id,
        'name' => 'Oldest Lead',
        'created_at' => now()->subDays(5),
    ]);

    $newestLead = Lead::factory()->create([
        'user_id' => $user->id,
        'name' => 'Newest Lead',
        'created_at' => now(),
    ]);

    $this->actingAs($user)
        ->get(route('leads.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('leads/index')
            ->where('leads.data.0.name', 'Newest Lead')
            ->where('leads.data.1.name', 'Oldest Lead'));
});

test('search filters leads by name', function (): void {
    $user = User::factory()->create();

    Lead::factory()->create([
        'user_id' => $user->id,
        'name' => 'John Doe',
    ]);

    Lead::factory()->create([
        'user_id' => $user->id,
        'name' => 'Jane Smith',
    ]);

    $this->actingAs($user)
        ->get(route('leads.index', ['search' => 'John']))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('leads/index')
            ->has('leads.data', 1)
            ->where('leads.data.0.name', 'John Doe')
            ->where('filters.search', 'John'));
});

test('search filters leads by email', function (): void {
    $user = User::factory()->create();

    Lead::factory()->create([
        'user_id' => $user->id,
        'email' => 'john@example.com',
    ]);

    Lead::factory()->create([
        'user_id' => $user->id,
        'email' => 'jane@example.com',
    ]);

    $this->actingAs($user)
        ->get(route('leads.index', ['search' => 'john@example']))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('leads/index')
            ->has('leads.data', 1)
            ->where('leads.data.0.email', 'john@example.com'));
});

test('search filters leads by phone', function (): void {
    $user = User::factory()->create();

    Lead::factory()->create([
        'user_id' => $user->id,
        'phone' => '1234567890',
    ]);

    Lead::factory()->create([
        'user_id' => $user->id,
        'phone' => '9876543210',
    ]);

    $this->actingAs($user)
        ->get(route('leads.index', ['search' => '123']))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('leads/index')
            ->has('leads.data', 1)
            ->where('leads.data.0.phone', '1234567890'));
});

test('search is case insensitive', function (): void {
    $user = User::factory()->create();

    Lead::factory()->create([
        'user_id' => $user->id,
        'name' => 'John Doe',
    ]);

    $this->actingAs($user)
        ->get(route('leads.index', ['search' => 'JOHN']))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('leads/index')
            ->has('leads.data', 1)
            ->where('leads.data.0.name', 'John Doe'));
});

test('search with empty string returns all leads', function (): void {
    $user = User::factory()->create();
    Lead::factory()->count(5)->create(['user_id' => $user->id]);

    $this->actingAs($user)
        ->get(route('leads.index', ['search' => '']))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('leads/index')
            ->has('leads.data', 5));
});

test('search preserves query string in pagination links', function (): void {
    $user = User::factory()->create();
    Lead::factory()->count(15)->create([
        'user_id' => $user->id,
        'name' => 'John Doe',
    ]);

    $this->actingAs($user)
        ->get(route('leads.index', ['search' => 'John']))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('leads/index')
            ->has('leads.links')
            ->where('leads.links', function ($links) {
                // Convert Collection to array if needed
                $linksArray = is_array($links) ? $links : $links->toArray();

                // Check that pagination links include search parameter
                foreach ($linksArray as $link) {
                    if (isset($link['url']) && $link['url'] !== null) {
                        expect($link['url'])->toContain('search=John');
                    }
                }

                return true;
            }));
});

test('empty state is shown when user has no leads', function (): void {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(route('leads.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('leads/index')
            ->has('leads.data', 0)
            ->where('leads.total', 0));
});

test('empty state is shown when search returns no results', function (): void {
    $user = User::factory()->create();
    Lead::factory()->create([
        'user_id' => $user->id,
        'name' => 'John Doe',
    ]);

    $this->actingAs($user)
        ->get(route('leads.index', ['search' => 'NonExistent']))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('leads/index')
            ->has('leads.data', 0)
            ->where('leads.total', 0)
            ->where('filters.search', 'NonExistent'));
});

test('search trims whitespace from search term', function (): void {
    $user = User::factory()->create();

    Lead::factory()->create([
        'user_id' => $user->id,
        'name' => 'John Doe',
    ]);

    $this->actingAs($user)
        ->get(route('leads.index', ['search' => '  John  ']))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('leads/index')
            ->has('leads.data', 1)
            ->where('leads.data.0.name', 'John Doe'));
});
