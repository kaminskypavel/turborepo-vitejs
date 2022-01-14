export type User = {
    id: number;
    name: string;
    email: string;
}

export const defaultUser = {
    id: 0,
    name: "bob",
    email: ""
} as User