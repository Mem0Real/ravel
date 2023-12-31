import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id: "unravel",
            name: "unravel",
            credentials: {
                phone: {
                    label: 'Phone',
                    type: 'number',
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            async authorize(credentials, req) {
                const payload = {
                    phone: credentials?.phone,
                    password: credentials?.password
                }

                const res = await fetch('https://lively.unravelplc.com/api/login', {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '*/*',
                    }
                });

                const user = await res.json();

                if(!res.ok) {
                    console.log("error")
                    throw new Error(user.message);
                }

                if(res.ok && user) {
                    return user;
                }

                // return null
            }
        })
    ],

    secret: process.env.NEXTAUTH_SECRET,
    // callbacks: {
    //     async jwt({ token, user, account }) {
    //         if (account && user) {
    //           return {
    //             ...token,
    //             accessToken: user.token,
    //             refreshToken: user.refreshToken,
    //           };
    //         }
      
    //         return token;
    //       },
      
    //       async session({ session, token }) {
    //         session.user.accessToken = token.accessToken;
    //         session.user.refreshToken = token.refreshToken;
    //         session.user.accessTokenExpires = token.accessTokenExpires;
      
    //         return session;
    //       },
    // },
    debug: process.env.NODE_ENV === 'development',
});

export { handler as POST, handler as GET };
