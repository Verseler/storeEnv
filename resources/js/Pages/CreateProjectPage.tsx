import type React from "react";
import { SaveIcon } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Card, CardContent } from "@/Components/ui/card";
import { Separator } from "@/Components/ui/separator";
import { Label } from "@/Components/ui/label";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/ui/input-error";
import { H1 } from "@/Components/Typography";
import { useForm } from "@inertiajs/react";
import LinkButton from "@/Components/LinkButton";

export default function NewProjectForm() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        description: "",
        env: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route("project.create"));
    };

    return (
        <AuthenticatedLayout mainClassName="max-w-5xl mx-auto">
            <H1 className="mb-5">Create New Project</H1>

            <form onSubmit={handleSubmit}>
                <div className="grid gap-6">
                    <div className="grid gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="project-name">Project Name</Label>
                            <Input
                                id="project-name"
                                placeholder="My Project..."
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                invalid={!!errors.name}
                            />
                            <InputError>{errors.name}</InputError>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                placeholder="Describe your project..."
                                className="resize-none"
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                invalid={!!errors.description}
                            />
                            <InputError>{errors.description}</InputError>
                        </div>
                    </div>

                    <Separator />

                    <div>
                        <Label className="text-base">
                            Environment Variables
                        </Label>

                        <Card className="mt-2">
                            <CardContent className="p-4">
                                <div className="space-y-2">
                                    <Label htmlFor="env-text">
                                        Environment Variables
                                    </Label>
                                    <Textarea
                                        id="env-text"
                                        value={data.env}
                                        onChange={(e) =>
                                            setData("env", e.target.value)
                                        }
                                        placeholder="KEY=value
ANOTHER_KEY=another_value
SECRET_KEY=secret_value"
                                        className="font-mono text-sm min-h-[150px]"
                                        invalid={!!errors.env}
                                    />
                                    <InputError>{errors.env}</InputError>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="flex justify-end mt-4 space-x-4">
                    <LinkButton
                        href={route("home")}
                        type="button"
                        variant="outline"
                    >
                        Cancel
                    </LinkButton>
                    <Button type="submit" disabled={processing}>
                        <SaveIcon className="w-4 h-4 mr-2" />
                        Create Project
                    </Button>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
