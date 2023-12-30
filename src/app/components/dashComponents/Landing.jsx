import Image from "next/image";
import React from "react";
import BackgroundSm from "./landingComponents/BackgroundSm";
import LandingText from "./landingComponents/LandingText";
import BackgroundLg from "./landingComponents/BackgroundLg";

const Landing = () => {
	return (
		<div className="min-h-56 relative flex flex-col md:flex-row justify-start items-start w-fit mx-auto -mt-16 md:-mt-5 md:ps-36 ">
			<BackgroundSm />
			<LandingText />
			<BackgroundLg />
		</div>
	);
};

export default Landing;
