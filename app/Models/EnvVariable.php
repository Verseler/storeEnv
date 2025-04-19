<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EnvVariable extends Model
{
    protected $fillable = [
        'content',
        'project_id'
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
