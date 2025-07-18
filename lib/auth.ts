import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import { admin } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
    trustedOrigins: [`${process.env.NEXT_PUBLIC_APP_URL}`],
    allowedDevOrigins: [`${process.env.NEXT_PUBLIC_APP_URL}`],
    cookieCache: {
        enabled: true,
        maxAge: 5 * 60, // Cache duration in seconds
    },
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: true,
        minPasswordLength: 3,
        maxPasswordLength: 6,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
    plugins: [
        admin({
            defaultRole: "admin",
            allowedRoles: ["admin"],
        }),
        nextCookies(),
    ],
});