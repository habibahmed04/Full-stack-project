<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Notifications\BookingStatusNotification;

class BookingsController extends Controller
{
    /**
     * Store a new booking (Authenticated User)
     */
    public function store(Request $request)
    {
        // API-safe validation (NO redirects)
        $validator = Validator::make($request->all(), [
            'party_size'   => 'required|integer|min:1',
            'booking_time' => 'required|date|after:now',
            'user_name'    => 'required|string|max:255',
            'user_email'   => 'required|email|max:255',
            'phone_number' => 'required|string|max:20',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 422);
        }

        $booking = Booking::create([
            'user_id'      => Auth::id(),
            'party_size'   => $request->party_size,
            'booking_time' => $request->booking_time,
            'user_name'    => $request->user_name,
            'user_email'   => $request->user_email,
            'phone_number' => $request->phone_number,
            'status'       => 'pending',
        ]);

        return response()->json([
            'message' => 'Table booking requested successfully! Awaiting confirmation.',
            'booking' => $booking,
        ], 201);
    }

    /**
     * Get all bookings (Admin)
     */
    public function index()
    {
        $bookings = Booking::orderBy('created_at', 'desc')->get();

        return response()->json($bookings, 200);
    }

    /**
     * Confirm or reject a booking (Admin)
     */
    public function confirm(Request $request, $id)
    {
        $booking = Booking::findOrFail($id);

        // API-safe validation
        $validator = Validator::make($request->all(), [
            'status' => 'required|in:accepted,rejected',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 422);
        }

        $booking->status = $request->status;
        $booking->save();

        // Notify user (only if relationship exists)
        if ($booking->user) {
            $booking->user->notify(
                new BookingStatusNotification($booking)
            );
        }

        return response()->json([
            'message' => "Booking status updated to {$booking->status}.",
            'booking' => $booking,
        ], 200);
    }

    /**
     * Get bookings for the authenticated user
     */
    public function myBookings(Request $request)
{
    return response()->json([
        'bookings' => $request->user()->myBookings
    ]);
}
}
