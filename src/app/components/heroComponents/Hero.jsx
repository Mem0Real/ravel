import React from "react";
import HeroStart from "./HeroStart";
import HeroEnd from "./HeroEnd";

const Hero = () => {
	return (
		<div className="flex flex-col gap-12 md:flex-row items-center md:items-start justify-between w-fit relative">
			<div className="basis-0 md:basis-1/3 h-80 md:h-full text-center md:text-start md:mt-12">
				<HeroStart />
			</div>
			<div className="hidden md:block absolute -right-16 w-[40vw] h-[80vh] bg-heroBg bg-center bg-no-repeat bg-contain -z-50" />
			<div
				className="block md:hidden absolute inset-0 top-3 w-[80vw] h-[80vh] bg-center bg-no-repeat bg-contain -z-50"
				style={{ backgroundImage: `url("images/heroBgSm.png")` }}
			/>
			<div className="relative basis-0 md:basis-1/3">
				<HeroEnd />
			</div>
		</div>
	);
};

export default Hero;
