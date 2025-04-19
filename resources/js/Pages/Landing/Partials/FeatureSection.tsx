import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    CodeIcon,
    GlobeIcon,
    LockIcon,
    ShieldIcon,
    UsersIcon,
    ZapIcon,
} from "lucide-react";

export default function FeatureSection() {
    return (
        <section
            id="features"
            className="w-full py-12 md:py-24 lg:py-32 bg-muted/40"
        >
            <div className="container px-4 mx-auto md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block px-3 py-1 text-sm rounded-lg bg-primary text-primary-foreground">
                            Features
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Everything You Need
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            EnvStore provides all the tools you need to manage
                            environment variables efficiently.
                        </p>
                    </div>
                </div>
                <div className="grid items-center max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <ShieldIcon className="w-10 h-10 mb-2 text-primary" />
                            <CardTitle>Organized Storage</CardTitle>
                            <CardDescription>
                                Keep all your environment variables in one
                                place, neatly structured and easy to manage—no
                                more scattered files.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card>
                        <CardHeader>
                            <UsersIcon className="w-10 h-10 mb-2 text-primary" />
                            <CardTitle>Team Collaboration</CardTitle>
                            <CardDescription>
                                Easily share variables with teammates.
                                Collaborate without the back-and-forth or manual
                                syncing.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card>
                        <CardHeader>
                            <GlobeIcon className="w-10 h-10 mb-2 text-primary" />
                            <CardTitle>Environment Management</CardTitle>
                            <CardDescription>
                                Manage dev, staging, and production variables
                                from one dashboard. Switch contexts
                                effortlessly.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CodeIcon className="w-10 h-10 mb-2 text-primary" />
                            <CardTitle>Developer-Friendly</CardTitle>
                            <CardDescription>
                                Quickly copy and use environment variables in
                                your projects. Keep everything easy to access
                                during development.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card>
                        <CardHeader>
                            <LockIcon className="w-10 h-10 mb-2 text-primary" />
                            <CardTitle>Smart Permissions</CardTitle>
                            <CardDescription>
                                Assign roles and define who can view or update
                                variables. Keep things tidy without
                                micromanaging.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card>
                        <CardHeader>
                            <ZapIcon className="w-10 h-10 mb-2 text-primary" />
                            <CardTitle>Change History</CardTitle>
                            <CardDescription>
                                View changes over time and easily restore
                                previous versions when needed. Peace of mind,
                                built in.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </section>
    );
}
