import React from "react";
import LinkButton from "@/Components/LinkButton";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { cn } from "@/lib/utils";

type BackButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    className?: React.HTMLProps<HTMLElement>["className"];
    size?: "lg" | "sm" | "default" | "icon";
};

export default function BackButton({
    children,
    className,
    size,
    type,
}: BackButtonProps) {
    return (
        <a
            onClick={() => {
                history.back();
                return false;
            }}
        >
            <Button
                variant="outline"
                size={size || "icon"}
                className={cn(
                    "border-primary-500 w-max px-3 text-primary-500 hover:bg-primary-50 hover:text-primary-600",
                    className
                )}
                type={type}
            >
                {children || <ArrowLeftIcon />}
            </Button>
        </a>
    );
}
