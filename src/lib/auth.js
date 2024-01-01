import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
	session: {
		strategy: "jwt",
	},
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				phone: {
					label: "Phone",
					type: "number",
				},
				password: {
					label: "Password",
					type: "password",
				},
			},
			async authorize(credentials, req) {
				const payload = {
					phone: credentials?.phone,
					password: credentials?.password,
				};

				const res = await fetch("https://lively.unravelplc.com/api/login", {
					method: "POST",
					body: JSON.stringify(payload),
					headers: {
						"Content-Type": "application/json",
						Accept: "*/*",
					},
				});

				const user = await res.json();

				if (!res.ok) {
					throw new Error(user.message);
				}

				if (res.ok && user) {
					return user;
				}

				return null;
			},
		}),
	],
	pages: {
		signIn: "/login",
		error: "/login",
	},
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		session({ session, token }) {
			session.user = token.user;
			return session;
		},
		jwt({ token, user }) {
			if (user) {
				token.user = user;
			}
			return token;
		},
	},
};
