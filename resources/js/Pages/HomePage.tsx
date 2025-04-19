import { useState } from "react";
import { Plus, FolderOpen } from "lucide-react";
import ProjectCard from "@/Features/project/ProjectCard";
import SearchBar from "@/Components/SearchBar";
import { H2 } from "@/Components/Typography";
import LinkButton from "@/Components/LinkButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Project } from "@/Features/project/project.types";

type HomePageProps = {
    projects: Project[];
};

export default function HomePage({ projects = [] }: HomePageProps) {
    const [searchQuery, setSearchQuery] = useState("");

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
                                id={project.id}
                                name={project.name}
                                description={project.description}
                                envs={project.envs}
                            />
                        ))}
                    </div>
                )}
            </div>
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
