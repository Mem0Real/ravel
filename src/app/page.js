import React from "react";
import Hero from "./components/landingComponents/heroComponents/Hero";
import Body from "./components/landingComponents/bodyComponents/Body";
import Footer from "./components/landingComponents/footerComponents/BodyFooter";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between gap-36 py-8 md:py-5 px-12 md:px-16">
			<Hero />
			<Body />
			<Footer />
		</main>
	);
}
