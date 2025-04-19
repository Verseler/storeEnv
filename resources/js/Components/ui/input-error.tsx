import { cn } from "@/lib/utils";
import React from "react";

type InputErrorProps = {
    children: React.ReactNode;
    className: React.HTMLProps<HTMLElement>["className"];
};

export default function InputError({ children, className }: InputErrorProps) {
    if (!children) return;

    return (
        <p className={cn("text-sm font-medium text-destructive", className)}>
            {children}
        </p>
    );
}
