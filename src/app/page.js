import React from "react";
import Hero from "./components/heroComponents/Hero";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between py-8 md:py-5 px-12 md:px-16">
			<Hero />
		</main>
	);
}
