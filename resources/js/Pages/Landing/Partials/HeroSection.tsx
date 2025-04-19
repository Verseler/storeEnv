import LinkButton from "@/Components/LinkButton";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import { ArrowRightIcon } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 mx-auto md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Simple Environment Variable Management for Teams
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Easily access, organize, and centralize your
                                environment variables across your team and
                                projects. Say goodbye to scattered .env files
                                and hard-to-find configurations.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <LinkButton href={route("register")}>
                                Get Started
                                <ArrowRightIcon className="ml-2 size-4" />
                            </LinkButton>
                            <LinkButton variant="outline" href="#how-it-works">
                                Learn More
                            </LinkButton>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                            <div className="absolute inset-0 overflow-hidden border rounded-lg shadow-lg bg-gradient-to-r from-primary/20 to-secondary/20">
                                <div className="absolute inset-0 bg-white/90 dark:bg-black/80">
                                    <div className="p-4 md:p-8">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 bg-red-500 rounded-full" />
                                                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                                                <div className="w-3 h-3 bg-green-500 rounded-full" />
                                            </div>
                                            <div className="font-mono text-xs">
                                                .env - Production
                                            </div>
                                        </div>
                                        <div className="space-y-2 font-mono text-sm">
                                            <div className="flex">
                                                <span className="mr-2 text-green-600 dark:text-green-400">
                                                    #
                                                </span>
                                                <span className="text-muted-foreground">
                                                    API Keys
                                                </span>
                                            </div>
                                            <div className="flex">
                                                <span className="mr-2 text-blue-600 dark:text-blue-400">
                                                    API_KEY
                                                </span>
                                                <span>=</span>
                                                <span className="ml-2 text-red-600 dark:text-red-400">
                                                    sk_live_*************
                                                </span>
                                            </div>
                                            <div className="flex">
                                                <span className="mr-2 text-green-600 dark:text-green-400">
                                                    #
                                                </span>
                                                <span className="text-muted-foreground">
                                                    Database
                                                </span>
                                            </div>
                                            <div className="flex">
                                                <span className="mr-2 text-blue-600 dark:text-blue-400">
                                                    DB_HOST
                                                </span>
                                                <span>=</span>
                                                <span className="ml-2">
                                                    production-db.example.com
                                                </span>
                                            </div>
                                            <div className="flex">
                                                <span className="mr-2 text-blue-600 dark:text-blue-400">
                                                    DB_USER
                                                </span>
                                                <span>=</span>
                                                <span className="ml-2">
                                                    admin
                                                </span>
                                            </div>
                                            <div className="flex">
                                                <span className="mr-2 text-blue-600 dark:text-blue-400">
                                                    DB_PASS
                                                </span>
                                                <span>=</span>
                                                <span className="ml-2 text-red-600 dark:text-red-400">
                                                    **********
                                                </span>
                                            </div>
                                            <div className="flex">
                                                <span className="mr-2 text-green-600 dark:text-green-400">
                                                    #
                                                </span>
                                                <span className="text-muted-foreground">
                                                    Services
                                                </span>
                                            </div>
                                            <div className="flex">
                                                <span className="mr-2 text-blue-600 dark:text-blue-400">
                                                    REDIS_URL
                                                </span>
                                                <span>=</span>
                                                <span className="ml-2">
                                                    redis://cache.example.com:6379
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
