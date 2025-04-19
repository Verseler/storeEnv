import { Link } from '@inertiajs/react';
import { FolderOpenDotIcon } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full py-6 border-t md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 mx-auto md:h-24 md:flex-row">
            <div className="flex items-center gap-2">
                <FolderOpenDotIcon className="w-5 h-5 text-primary" />
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} EnvStore. All rights
                    reserved.
                </p>
            </div>
            <div className="flex gap-4">
                <Link
                    href="/"
                    className="text-sm text-muted-foreground hover:underline underline-offset-4"
                >
                    Terms
                </Link>
                <Link
                    href="/"
                    className="text-sm text-muted-foreground hover:underline underline-offset-4"
                >
                    Privacy
                </Link>
                <Link
                    href="/"
                    className="text-sm text-muted-foreground hover:underline underline-offset-4"
                >
                    Contact
                </Link>
            </div>
        </div>
    </footer>
    );
}
