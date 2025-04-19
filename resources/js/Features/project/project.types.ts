export type Project = {
    id: number;
    name: string;
    description: string;
    envs: Env[];
}

export type Env = {
    id: number;
    content: string;
}
