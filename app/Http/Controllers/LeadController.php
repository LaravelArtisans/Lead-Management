<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

final class LeadController
{
    /**
     * Number of leads per page.
     */
    private const PER_PAGE = 10;

    /**
     * Display a listing of the leads.
     */
    public function index(Request $request): Response
    {
        $query = $request->user()->leads();

        $this->applySearchFilter($query, $request);

        $leads = $query
            ->orderBy('created_at', 'desc')
            ->paginate(self::PER_PAGE)
            ->withQueryString();

        return Inertia::render('leads/index', [
            'leads' => $leads,
            'filters' => $request->only(['search']),
        ]);
    }

    /**
     * Apply search filter to the query.
     */
    private function applySearchFilter($query, Request $request): void
    {
        if (! $request->has('search') || $request->string('search')->isEmpty()) {
            return;
        }

        $searchTerm = $request->string('search')->trim();
        $query->search($searchTerm);
    }
}
