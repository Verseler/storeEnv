import AuthHeader from "@/Components/AuthHeader";
import { cn } from "@/lib/utils";
import React from "react";

type AuthenticatedLayoutProps = {
    children: React.ReactNode;
    containerClassName?: React.HTMLProps<HTMLElement>["className"];
    mainClassName?: React.HTMLProps<HTMLElement>["className"];
};

export default function AuthenticatedLayout({
    children,
    containerClassName,
    mainClassName,
}: AuthenticatedLayoutProps) {
    return (
        <div className={cn("min-h-screen", containerClassName)}>
            <AuthHeader />

            <main className={cn("container px-4 py-6 mx-auto", mainClassName)}>
                {children}
            </main>
        </div>
    );
}
