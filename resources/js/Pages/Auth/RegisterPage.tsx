import InputError from "@/Components/ui/input-error";
import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import type { FormEventHandler } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="px-6 py-4 mx-auto overflow-hidden bg-white shadow-md mt-44 sm:max-w-sm sm:rounded-lg">
                <form onSubmit={submit}>
                    <div>
                        <Label htmlFor="name">Name</Label>

                        <Input
                            id="name"
                            name="name"
                            value={data.name}
                            className="block w-full mt-1"
                            autoComplete="name"
                            onChange={(e) => setData("name", e.target.value)}
                            invalid={!!errors.name}
                            required
                        />

                        <InputError className="mt-2">{errors.name}</InputError>
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="block w-full mt-1"
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                            invalid={!!errors.email}
                            required
                        />
                        <InputError className="mt-2">{errors.email}</InputError>
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="block w-full mt-1"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            invalid={!!errors.password}
                            required
                        />
                        <InputError className="mt-2">
                            {errors.password}
                        </InputError>
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="password_confirmation">
                            Confirm Password
                        </Label>

                        <Input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="block w-full mt-1"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            invalid={!!errors.password_confirmation}
                            required
                        />
                        <InputError className="mt-2">
                            {errors.password_confirmation}
                        </InputError>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href={route("login")}
                            className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Already registered?
                        </Link>

                        <Button className="ms-4" disabled={processing}>
                            Register
                        </Button>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
