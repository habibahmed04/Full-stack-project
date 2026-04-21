<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BookingsController;
use App\Http\Controllers\Admin\MenuItemController;
use App\Http\Middleware\CheckAdmin;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
| All routes here are automatically prefixed with /api
| Do NOT add Route::prefix('api') again
*/

/*
|--------------------------------------------------------------------------
| Public Authentication Routes
|--------------------------------------------------------------------------
*/
Route::post('/register', [RegisterController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);

/*
|--------------------------------------------------------------------------
| Protected Routes (Authenticated Users)
|--------------------------------------------------------------------------
*/
Route::middleware('auth:sanctum')->group(function () {

    Route::middleware('auth:sanctum')->post('/logout', [LoginController::class, 'logout']);

    // User profile
    Route::put('/profile', [UserController::class, 'updateProfile']);

    // User bookings
    Route::get('/my-bookings', [BookingsController::class, 'myBookings']);
    Route::post('/book-table', [BookingsController::class, 'store']);

    // Menu (visible to logged-in users)
    Route::get('/menu', [MenuItemController::class, 'index']);
});

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/
Route::middleware(['auth:sanctum', CheckAdmin::class])
    ->prefix('admin')
    ->group(function () {

        // Menu management
        Route::post('/menu-items', [MenuItemController::class, 'store']);
        Route::put('/menu-items/{id}', [MenuItemController::class, 'update']);
        Route::delete('/menu-items/{id}', [MenuItemController::class, 'destroy']);

        // Bookings management
        Route::get('/bookings', [BookingsController::class, 'index']);
        Route::put('/bookings/{id}/confirm', [BookingsController::class, 'confirm']);

        // Users
        Route::get('/users', [UserController::class, 'index']);
    });
