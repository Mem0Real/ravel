import { Inter } from "next/font/google";
import "./globals.css";

import NextTopLoader from "nextjs-toploader";

import { NavbarBase } from "./serverComponents/NavbarBase";
import Footer from "./navigation/Footer";

import ToasterContext from "@/context/ToasterContext";

const inter = Inter({ weight: "200", subsets: ["latin"] });

export const metadata = {
	title: "Ravel",
	description: "Created by Mem0Real",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ToasterContext />
				<div className="flex flex-col justify-between h-full">
					<NavbarBase />
					<div className="overflow-x-hidden no-scrollbar bg-neutral-400/30 backdrop-blur-50">
						<NextTopLoader showSpinner={false} />
					</div>
				</div>
				{children}
				<Footer />
			</body>
		</html>
	);
}
