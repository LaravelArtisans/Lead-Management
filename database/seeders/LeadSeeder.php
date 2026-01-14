<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Lead;
use App\Models\User;
use Illuminate\Database\Seeder;

final class LeadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get all users and create leads for each
        $users = User::all();

        if ($users->isEmpty()) {
            return;
        }

        // Create 5-10 leads for each user
        foreach ($users as $user) {
            Lead::factory()
                ->count(fake()->numberBetween(5, 10))
                ->create([
                    'user_id' => $user->id,
                ]);
        }
    }
}
