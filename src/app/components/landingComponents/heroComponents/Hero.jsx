import React from "react";
import HeroStart from "./HeroStart";
import HeroEnd from "./HeroEnd";

const Hero = () => {
	return (
		<div className="flex flex-col gap-12 md:flex-row items-center md:items-center justify-between w-fit relative md:mt-4">
			<div className="basis-0 md:basis-1/3 h-80 md:h-full md:-mt-5 text-center md:text-start">
				<HeroStart />
			</div>
			<div className="hidden md:block absolute -right-16 w-[40vw] h-[80vh] bg-heroBg bg-center bg-no-repeat bg-contain -z-50" />
			<div
				className="block md:hidden absolute inset-0 top-3 w-[80vw] h-[80vh] bg-center bg-no-repeat bg-contain -z-50"
				style={{ backgroundImage: `url("images/heroBgSm.webp")` }}
			/>
			<div className="relative basis-0 md:basis-1/3">
				<HeroEnd />
			</div>
		</div>
	);
};

export default Hero;
