<?php

// app/Notifications/BookingStatusNotification.php

namespace App\Notifications;

use App\Models\Booking; 
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class BookingStatusNotification extends Notification
{
    use Queueable;

    protected $booking;

    public function __construct(Booking $booking)
    {
        $this->booking = $booking;
    }

    public function via(object $notifiable): array
    {
        // Use the 'database' channel for in-app alerts
        return ['database']; 
    }

    public function toArray(object $notifiable): array
    {
        $status = $this->booking->status;
        
        return [
            'booking_id' => $this->booking->id,
            'status' => $status,
            'message' => "Your table booking for {$this->booking->booking_time} has been {$status}.",
        ];
    }
}