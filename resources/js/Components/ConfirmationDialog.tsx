import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/Components/ui/alert-dialog";
import { Button } from "@/Components/ui/button";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const confirmationDialogVariants = cva("", {
    variants: {
        variant: {
            default:
                "bg-blue-500 text-white hover:bg-blue-600 hover:text-white",
            destructive:
                "bg-red-500 text-white hover:bg-red-600 hover:text-white",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

type ConfirmationDialogProps = {
    open: boolean;
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
    onConfirm: () => void;
    confirmLabel?: string;
    variant?: "default" | "destructive";
    title: string;
    description: string;
};

export default function ConfirmationDialog({
    open = false,
    onOpenChange,
    onConfirm,
    variant = "default",
    confirmLabel = "Confirm",
    title,
    description,
}: ConfirmationDialogProps) {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        className={cn(confirmationDialogVariants({ variant }))}
                        onClick={onConfirm}
                    >
                        {confirmLabel}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
