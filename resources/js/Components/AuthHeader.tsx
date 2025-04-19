import ApplicationLogo from "@/Components/ApplicationLogo";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { getNameInitial } from "@/lib/utils";
import { Link, usePage } from "@inertiajs/react";
import type { PageProps } from "@/types";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

export default function AuthHeader() {
    const page = usePage<PageProps>();

    return (
        <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
            <div className="flex items-center justify-between h-16 px-4">
                <ApplicationLogo />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar className="cursor-pointer">
                            <AvatarImage
                                src="/placeholder.svg?height=32&width=32"
                                alt="User"
                            />
                            <AvatarFallback>
                                {getNameInitial(page.props.auth.user.name)}
                            </AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40">
                        <DropdownMenuItem>
                            <Link
                                href={route("profile.edit")}
                                className="w-full"
                            >
                                Profile
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500">
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
