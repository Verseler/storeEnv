import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Button } from "@/Components/ui/button";
import { MoreHorizontalIcon } from "lucide-react";
import { Badge } from "@/Components/ui/badge";
import type { Env } from "@/Features/project/project.types";
import { Link } from "@inertiajs/react";

type ProjectCardProps = {
    id: number;
    name: string;
    description: string;
    envs: Env[];
};

export default function ProjectCard({
    id,
    description,
    name,
    envs,
}: ProjectCardProps) {
    return (
        <Card className="overflow-hidden">
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                    <div>
                        <CardTitle className="text-lg">{name}</CardTitle>
                        <CardDescription className="mt-1 line-clamp-2">
                            {description}
                        </CardDescription>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="w-8 h-8"
                            >
                                <MoreHorizontalIcon className="w-4 h-4" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit project</DropdownMenuItem>
                            <DropdownMenuItem>
                                Duplicate project
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                                <Link
                                    href={route("project.destroy", {
                                        id: id,
                                    })}
                                    method="delete"
                                    as="button"
                                >
                                    Delete project
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>

            <CardFooter className="flex items-center justify-between pt-3 border-t">
                {/* <div className="flex -space-x-2">
                                            {project.teamMembers
                                                .slice(0, 3)
                                                .map((member) => (
                                                    <Avatar
                                                        key={member.id}
                                                        className="border-2 border-background h-7 w-7"
                                                    >
                                                        <AvatarImage
                                                            src={
                                                                member.avatar ||
                                                                "/placeholder.svg"
                                                            }
                                                            alt={member.name}
                                                        />
                                                        <AvatarFallback className="text-xs">
                                                            {member.name
                                                                .split(" ")
                                                                .map(
                                                                    (n) => n[0]
                                                                )
                                                                .join("")}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                ))}
                                            {project.teamMembers.length > 3 && (
                                                <div className="flex items-center justify-center text-xs font-medium border-2 rounded-full h-7 w-7 border-background bg-muted">
                                                    +
                                                    {project.teamMembers
                                                        .length - 3}
                                                </div>
                                            )}
                                        </div> */}
            </CardFooter>
        </Card>
    );
}
