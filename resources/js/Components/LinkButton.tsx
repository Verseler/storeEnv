import { Link } from "@inertiajs/react";
import { Button, buttonVariants } from "@/Components/ui/button";
import React from "react";
import { VariantProps } from "class-variance-authority";

export interface LinkButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    href: string;
    children: React.ReactNode;
    className?: React.HTMLProps<HTMLElement>["className"];
    asChild?: boolean;
}

export default function LinkButton({
    href,
    children,
    className,
    ...props
}: LinkButtonProps) {
    return (
        <Link href={href} as-child="true">
            <Button className={className} {...props}>
                {children}
            </Button>
        </Link>
    );
}
