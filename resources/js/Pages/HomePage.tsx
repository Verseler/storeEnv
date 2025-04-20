import { useState } from "react";
import { Plus, FolderOpen } from "lucide-react";
import ProjectCard from "@/Features/project/ProjectCard";
import SearchBar from "@/Components/SearchBar";
import { H2 } from "@/Components/Typography";
import LinkButton from "@/Components/LinkButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import type { Project } from "@/Features/project/project.types";
import ConfirmationDialog from "@/Components/ConfirmationDialog";
import { router } from "@inertiajs/react";
import ProjectDetailSheet from "@/Features/project/ProjectDetailSheet";

type HomePageProps = {
    projects: Project[];
};

export default function HomePage({ projects = [] }: HomePageProps) {
    const [selectedProject, setSelectedProject] = useState<Project | undefined>(
        undefined
    );
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    function deleteProject() {
        if (!selectedProject || !selectedProject.id) return;

        router.visit(route("project.destroy", { id: selectedProject.id }), {
            method: "delete",
        });
    }

    const filteredProjects = searchQuery
        ? projects.filter(
              (project) =>
                  project.name
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase()) ||
                  project.description
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
          )
        : projects;

    return (
        <AuthenticatedLayout>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <H2>Projects</H2>
                    <div className="flex items-center gap-2">
                        <SearchBar
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <LinkButton href={route("project.create")}>
                            <Plus className="w-4 h-4 mr-2" />
                            New Project
                        </LinkButton>
                    </div>
                </div>

                {filteredProjects.length === 0 ? (
                    <NoProjectFound searchQuery={searchQuery} />
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                name={project.name}
                                description={project.description}
                                envs={project.env_variables}
                                onView={() => {
                                    setSelectedProject(project);
                                    setIsSheetOpen(true);
                                }}
                                onDelete={() => {
                                    setSelectedProject(project);
                                    setDeleteConfirmation(true);
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>

            <ConfirmationDialog
                open={deleteConfirmation}
                onOpenChange={setDeleteConfirmation}
                onConfirm={deleteProject}
                variant="destructive"
                confirmLabel="Delete Project"
                title="Are you sure you want to delete this project?"
                description="Once this project is deleted, all of its env text and files will be permanently deleted."
            />
            <ProjectDetailSheet
                project={selectedProject}
                open={isSheetOpen}
                onOpenChange={setIsSheetOpen}
            />
        </AuthenticatedLayout>
    );
}

function NoProjectFound({ searchQuery }: { searchQuery: string }) {
    return (
        <div className="flex h-[50vh] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
            <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                <FolderOpen className="w-10 h-10 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">
                    No projects found
                </h3>
                <p className="mt-2 mb-4 text-sm text-muted-foreground">
                    {searchQuery
                        ? "Try a different search term or"
                        : "Get started by"}{" "}
                    creating a new project.
                </p>
                <LinkButton href={route("project.create")}>
                    <Plus className="w-4 h-4 mr-2" />
                    New Project
                </LinkButton>
            </div>
        </div>
    );
}
