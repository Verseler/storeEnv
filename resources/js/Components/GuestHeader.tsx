import { usePage } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { PageProps } from "@/types";
import LinkButton from "@/Components/LinkButton";

export default function Header() {
    const user = usePage<PageProps>().props.auth.user;

    return (
        <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
            <div className="flex items-center justify-between h-16 px-4">
                <ApplicationLogo />
                <div className="flex items-center gap-4">
                    {user ? (
                        <LinkButton href={route("home")}>Home</LinkButton>
                    ) : (
                        <>
                            <LinkButton variant="ghost" href={route("login")}>
                                Log in
                            </LinkButton>
                            <LinkButton href={route("register")}>
                                Sign up
                            </LinkButton>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
