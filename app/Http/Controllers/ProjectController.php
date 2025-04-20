<?php

namespace App\Http\Controllers;

use App\Models\EnvVariable;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::with('envVariables')->where('user_id', Auth::id())->get();

        return Inertia::render('HomePage', [
            'projects' => $projects
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('CreateProjectPage');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string'],
            'description' => ['required', 'string'],
            'env' => ['required', 'string']
        ]);

        try {
            DB::transaction(function () use ($validated) {
                $project = Project::create([
                    'name' => $validated['name'],
                    'description' => $validated['description'],
                    'user_id' => Auth::id()
                ]);

                EnvVariable::create([
                    'content' => $validated['env'],
                    'project_id' => $project->id
                ]);
            });
        } catch (\Exception $e) {
            dd($e);
            return redirect()->back();
        }

        return to_route('home')->with('success', 'Successfully created project.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Project::findOrFail($id)->delete();

        return redirect()->route('login')->with('success', 'Successfully deleted project.');
    }
}
