import React, { useMemo, useState } from "react";

interface UserContextType {
    authenticated: boolean;
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    user: any;
    setUser: React.Dispatch<React.SetStateAction<any>>;
}

interface User {
    type: string;
    userId: string;
    phoneNumber: string;
    names: string;
    email: string;
    access_token: string;
}

const UserContext = React.createContext<UserContextType | undefined>(undefined);

type UserContextTypeProp = {
    children: React.ReactNode;
};

const UserProvider = ({ children }: UserContextTypeProp) => {
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<User>();

    const UserState = useMemo(
        () => ({
            authenticated,
            setAuthenticated,
            user,
            setUser,
        }),
        [authenticated, setAuthenticated, user, setUser]
    );

    return (
        <UserContext.Provider value={UserState}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
