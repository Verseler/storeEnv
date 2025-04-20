export type Project = {
    id: number;
    name: string;
    description: string;
    env_variables: EnvVariable[];
}

export type EnvVariable = {
    id: number;
    content: string;
}
