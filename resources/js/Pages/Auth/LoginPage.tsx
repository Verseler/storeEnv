import { Checkbox } from "@/Components/ui/checkbox";
import InputError from "@/Components/ui/input-error";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import type { FormEventHandler } from "react";
import { Button } from "@/Components/ui/button";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <Label htmlFor="email">Email</Label>

                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="block w-full mt-1"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
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
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <InputError className="mt-2">{errors.password}</InputError>
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onCheckedChange={(value: boolean) =>
                                setData("remember", value)
                            }
                        />
                        <span className="text-sm text-gray-600 ms-2">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {/* {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Forgot your password?
                        </Link>
                    )} */}

                    <Button className="ms-4 min-w-24" disabled={processing}>
                        Log in
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
