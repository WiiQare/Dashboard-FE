import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthenticationFunction } from "../authentication";

const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET, // Use the NEXTAUTH_SECRET environment variable
    session: {
        maxAge: 85000,
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.id = user.access_token;
                token.data = user;
            }

            return token;
        },

        async session({ session, token, user }: any) {
            session.user.id = token.id;
            session.user.data = token.data;
            session.access_token = token.id;
            return session;
        },
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials: any) {
                const response: any = await AuthenticationFunction(
                    credentials?.email,
                    credentials?.password
                );

                if (response?.type != "WIIQARE_ADMIN")
                    throw new Error("Vous n'êtes pas authoriser de vous connecter");
                return response;
            },
        }),
    ],

    pages: {
        signIn: "/auth/signIn",
    },
};

export default NextAuth(authOptions);
