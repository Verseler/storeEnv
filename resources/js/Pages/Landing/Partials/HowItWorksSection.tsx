export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 mx-auto md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block px-3 py-1 text-sm rounded-lg bg-primary text-primary-foreground">
                            How It Works
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Simple and Secure
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            EnvStore makes managing environment variables easy
                            for your entire team.
                        </p>
                    </div>
                </div>
                <div className="grid items-center max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-2 lg:gap-12">
                    <img
                        // src="/placeholder.svg?height=400&width=500"
                        width={500}
                        height={400}
                        // alt="Dashboard Preview"
                        className="object-cover object-center mx-auto overflow-hidden aspect-video rounded-xl sm:w-full lg:order-last"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                        <ul className="grid gap-6">
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">
                                        1. Create a Project
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Set up a new project and define your
                                        environments (development, staging,
                                        production).
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">
                                        2. Add Environment Variables
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Enter your variables manually or upload
                                        existing .env files for each
                                        environment.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">
                                        3. Invite Your Team
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Add team members and set appropriate
                                        access permissions for each project.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
