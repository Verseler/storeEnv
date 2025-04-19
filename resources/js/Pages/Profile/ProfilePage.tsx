import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "@/Pages/Profile/Partials/DeleteUserForm";
import UpdatePasswordForm from "@/Pages/Profile/Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "@/Pages/Profile/Partials/UpdateProfileInformationForm";
import { H1 } from "@/Components/Typography";
import BackButton from "@/Components/BackButton";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/Components/ui/separator";

export default function ProfilePage({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <AuthenticatedLayout>
            <Head title="Profile" />

            <div className="max-w-4xl py-12 mx-auto space-y-10 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <H1 className="text-4xl">Settings</H1>

                    <BackButton>
                        <ArrowLeft />
                        Back
                    </BackButton>
                </div>

                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                />

                <Separator />

                <UpdatePasswordForm />

                <Separator />

                <DeleteUserForm />
            </div>
        </AuthenticatedLayout>
    );
}
