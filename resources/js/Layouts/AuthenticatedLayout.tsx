import ApplicationLogo from "@/Components/ApplicationLogo";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Button } from "@/Components/ui/button";
import { cn, getNameInitial } from "@/lib/utils";
import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import { SettingsIcon } from "lucide-react";
import React from "react";

type AuthenticatedLayoutProps = {
    children: React.ReactNode;
    containerClassName?: React.HTMLProps<HTMLElement>["className"];
    mainClassName?: React.HTMLProps<HTMLElement>["className"];
    headerClassName?: React.HTMLProps<HTMLElement>["className"];
};

export default function AuthenticatedLayout({
    children,
    containerClassName,
    mainClassName,
    headerClassName,
}: AuthenticatedLayoutProps) {
    const page = usePage<PageProps>();

    return (
        <div className={cn("min-h-screen bg-background", containerClassName)}>
            <header
                className={cn(
                    "sticky top-0 z-10 border-b bg-background/95 backdrop-blur",
                    headerClassName
                )}
            >
                <div className="flex items-center justify-between h-16 px-4">
                    <ApplicationLogo />
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon">
                            <SettingsIcon className="w-5 h-5" />
                            <span className="sr-only">Settings</span>
                        </Button>
                        <Avatar>
                            <AvatarImage
                                src="/placeholder.svg?height=32&width=32"
                                alt="User"
                            />
                            <AvatarFallback>
                                {getNameInitial(page.props.auth.user.name)}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </header>

            <main className={cn("container px-4 py-6 mx-auto", mainClassName)}>
                {children}
            </main>
        </div>
    );
}
