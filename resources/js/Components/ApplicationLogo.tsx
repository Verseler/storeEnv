import { FolderOpenIcon } from "lucide-react";
import { H1 } from "@/Components/Typography";
import { Link } from "@inertiajs/react";

export default function ApplicationLogo() {
    return (
        <Link href="/" className="flex items-center gap-2">
            <FolderOpenIcon className="w-6 h-6 text-primary" />
            <H1>EnvStore</H1>
        </Link>
    );
}
