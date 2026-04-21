<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class CheckAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
       if (Auth::check() && Auth::user()->role === 'admin') {
            return $next($request); // Allow the request to proceed
        }

        // If the user is not an admin, deny access (HTTP 403 Forbidden)
        return response()->json(['message' => 'Unauthorized. Admin access required.'], 403);
    }
}
