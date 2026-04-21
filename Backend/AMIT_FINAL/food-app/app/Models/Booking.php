<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Booking extends Model
{
    protected $fillable = [
        'user_id',
        'party_size',
        'booking_time',
        'user_name',
        'user_email',
        'phone_number',
        'status',
    ];

    /**
     * A booking belongs to one user
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
