import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        Credentials({
            name: "credentials",
            credentials: {},
            async authorize(credentials, req) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                const res = fetch(`https://wiiqare.neema.co.za/api/v1/admin`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                });

                const user = (await res).json();
                // console.log("user => ", user);
                if (user) {
                    return user;
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: "/auth/signin",
    },
});
