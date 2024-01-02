import Image from "next/image";
import React from "react";
import BackgroundSm from "./landingComponents/BackgroundSm";
import LandingText from "./landingComponents/LandingText";
import BackgroundLg from "./landingComponents/BackgroundLg";

const Landing = () => {
	return (
		<div className="min-h-56 relative flex flex-col md:flex-row justify-start items-start w-fit md:ps-36 -mt-12 mb-12 md:mt-0 md:mb-0">
			<BackgroundSm />
			<LandingText />
			<BackgroundLg />
		</div>
	);
};

export default Landing;
