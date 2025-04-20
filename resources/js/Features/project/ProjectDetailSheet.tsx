import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/Components/ui/sheet";
import type { Project } from "@/Features/project/project.types";
import { useState } from "react";
import { Button } from "@/Components/ui/button";
import { CheckIcon, CopyIcon } from "lucide-react";

interface ProjectSheetProps {
    project: Project | undefined;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function ProjectSheet({
    project,
    open,
    onOpenChange,
}: ProjectSheetProps) {
    const [copiedId, setCopiedId] = useState<number | null>(null);

    if (!project) {
        return undefined;
    }

    const handleCopy = (content: string, id: number) => {
        navigator.clipboard.writeText(content);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent className="w-full sm:max-w-md">
                <SheetHeader>
                    <SheetTitle>{project.name}</SheetTitle>
                    <SheetDescription>{project.description}</SheetDescription>
                </SheetHeader>

                <div className="mt-6">
                    <h3 className="mb-2 text-sm font-medium">
                        Environment Variables
                    </h3>

                    <div className="border rounded-md">
                        <div className="px-4 py-2 border-b bg-muted">
                            <div className="text-xs font-medium">.env</div>
                        </div>
                        <div className="p-4 font-mono text-sm">
                            {project.env_variables.length <= 0 ? (
                                <div className="py-4 text-center text-muted-foreground">
                                    No environment variables
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    {project.env_variables.map((env) => (
                                        <div
                                            key={env.id}
                                            className="flex items-center justify-between group"
                                        >
                                            <div className="pr-2 break-all">
                                                {env.content}
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="flex-shrink-0 w-8 h-8 p-0"
                                                onClick={() =>
                                                    handleCopy(
                                                        env.content,
                                                        env.id
                                                    )
                                                }
                                            >
                                                {copiedId === env.id ? (
                                                    <CheckIcon className="w-4 h-4 text-green-500" />
                                                ) : (
                                                    <CopyIcon className="w-4 h-4" />
                                                )}
                                                <span className="sr-only">
                                                    Copy
                                                </span>
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
