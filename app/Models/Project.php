<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    /** @use HasFactory<\Database\Factories\ProjectFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'user_id'
    ];

    public function envVariables()
    {
        return $this->hasMany(EnvVariable::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
