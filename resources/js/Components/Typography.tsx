import { cn } from "@/lib/utils";

type classNameWithChildren = {
    children: React.ReactNode;
    className?: React.HTMLProps<HTMLElement>["className"];
};

export function H1({ children, className }: classNameWithChildren) {
    return <h1 className={cn("text-xl font-bold", className)}>{children}</h1>;
}

export function H2({ children, className }: classNameWithChildren) {
    return (
        <h2 className={cn("text-2xl font-bold tracking-tight", className)}>
            {children}
        </h2>
    );
}
