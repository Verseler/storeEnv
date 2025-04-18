export type User = {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type Flash = {
    success?: string | null;
    error?: string | null;
}


export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    flash: Flash
};

