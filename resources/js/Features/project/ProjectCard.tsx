import {
    Card,
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
import type { EnvVariable } from "@/Features/project/project.types";

type ProjectCardProps = {
    name: string;
    description: string;
    envs: EnvVariable[];
    onDelete: () => void;
    onView: () => void;
};

export default function ProjectCard({
    description,
    name,
    onDelete,
    onView,
}: ProjectCardProps) {
    return (
        <Card className="overflow-hidden shadow-sm">
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                    <div>
                        <CardTitle className="text-lg">{name}</CardTitle>
                        <CardDescription className="mt-1 line-clamp-2">
                            {description}
                        </CardDescription>
                    </div>
                    <DropdownMenu modal={false}>
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
                            <DropdownMenuItem onClick={onView}>
                                View
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={onDelete}
                                className="text-destructive"
                            >
                                Delete
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
