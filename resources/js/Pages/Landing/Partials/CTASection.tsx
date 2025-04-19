import LinkButton from "@/Components/LinkButton";
import { ArrowRightIcon } from "lucide-react";

export default function CTASection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 mx-auto md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Ready to simplify environment variable management?
                        </h2>
                        <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Join thousands of developers using EnvStore to
                            organize, access, and manage their variables—all in
                            one place.
                        </p>
                    </div>
                    <LinkButton href={route("register")}>
                        Get Started
                        <ArrowRightIcon className="ml-2 size-4" />
                    </LinkButton>
                </div>
            </div>
        </section>
    );
}
