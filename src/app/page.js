import React from "react";
import Hero from "./components/landingComponents/heroComponents/Hero";
import BodyImage from "./components/landingComponents/bodyComponents/BodyImage";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between gap-12 py-8 md:py-5 px-12 md:px-16">
			<Hero />
			<BodyImage />
		</main>
	);
}
