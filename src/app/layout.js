import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navigation/Navbar";
import Footer from "./navigation/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Ravel",
	description: "Created by Mem0Real",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<Navbar />
				<div className="pt-16 md:pt-6">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
