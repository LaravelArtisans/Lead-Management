<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Main platform sections
    Route::get('leads', function () {
        return Inertia::render('leads/index');
    })->name('leads.index');

    Route::get('scraping', function () {
        return Inertia::render('scraping/index');
    })->name('scraping.index');

    Route::get('campaigns', function () {
        return Inertia::render('campaigns/index');
    })->name('campaigns.index');

    Route::get('analytics', function () {
        return Inertia::render('analytics/index');
    })->name('analytics.index');
});

require __DIR__.'/settings.php';
