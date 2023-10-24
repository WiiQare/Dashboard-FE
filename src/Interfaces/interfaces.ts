export type UserType = {
    id: string;
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
    data: {
        userId: string;
        names: string;
        type: string;
    };
};
