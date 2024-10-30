import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            jwt: string,
            token: string,
            email: string,
        } & DefaultSession
    }

    interface User extends DefaultUser {
        email: string,
        jwt: string,
        token: string,
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        role: string,
    }
}