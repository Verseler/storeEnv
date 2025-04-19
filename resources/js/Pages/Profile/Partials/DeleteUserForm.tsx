import { Button } from "@/Components/ui/button";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useRef, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import InputError from "@/Components/ui/input-error";

export default function DeleteUserForm({
    className = "",
}: {
    className?: string;
}) {
    const passwordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const [deleteConfirmation, setDeleteConfirmation] =
        useState<boolean>(false);

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Delete Account
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to
                    retain.
                </p>
            </header>

            <Dialog
                open={deleteConfirmation}
                onOpenChange={setDeleteConfirmation}
            >
                <DialogTrigger className="px-4 py-2 text-sm text-white bg-red-500 rounded-md hover:bg-red-600 hover:text-white">
                    Delete Account
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {" "}
                            Are you sure you want to delete your account?
                        </DialogTitle>
                        <DialogDescription>
                            Once your account is deleted, all of its resources
                            and data will be permanently deleted. Please enter
                            your password to confirm you would like to
                            permanently delete your account.
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter>
                        <form onSubmit={deleteUser} className="w-full pb-6">
                            <div className="mt-6">
                                <Label htmlFor="password" className="sr-only">
                                    Password
                                </Label>

                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    ref={passwordInput}
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    placeholder="Password"
                                />

                                <InputError className="mt-2">
                                    {errors.password}
                                </InputError>
                            </div>

                            <div className="flex justify-end mt-6">
                                <Button
                                    variant="ghost"
                                    type="button"
                                    onClick={() => setDeleteConfirmation(false)}
                                >
                                    Cancel
                                </Button>

                                <Button
                                    className="text-white bg-red-500 ms-3 hover:bg-red-600 hover:text-white"
                                    type="submit"
                                    disabled={processing}
                                >
                                    Delete Account
                                </Button>
                            </div>
                        </form>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </section>
    );
}
