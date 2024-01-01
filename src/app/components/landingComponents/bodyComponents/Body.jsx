import React from "react";
import Image from "next/image";
import ScrollList from "./ScrollList";

import { Montserrat } from "next/font/google";
import { textSlideToL, textSlideToR } from "@/app/constants/variants";

const mont = Montserrat({ subsets: ["latin"] });

const skills = [
	"Superhuman Efficiency",
	"Enhanced Decision-Making",
	"Reduced Error and Risk",
	"Personalized Experiences",
	"Unlocking New Possibilities",
];

const actions = [
	"Business",
	"Healthcare",
	"Transportation",
	"Entertainment",
	"Science and Engineering",
];

const Body = () => {
	return (
		<div className="md:h-[35em] w-[99vw] relative backdrop-blur md:backdrop-blur-none flex flex-col md:flex-row justify-between">
			<div className="flex flex-col justify-center items-center md:items-start gap-3 w-full -mt-4 pb-12 md:-mt-44 md:ps-24 z-10 backdrop-blur md:backdrop-blur-none">
				<h1
					className={`text-3xl md:text-4xl font-medium text-center text-pretty w-[90%] md:w-auto ${mont.className}`}
				>
					AI Skills in a nutshell
				</h1>

				<ScrollList list={skills} variant={textSlideToL} />
			</div>
			<Image
				fill
				src="/images/homeBodyBg2.png"
				alt=""
				className="absolute object-cover w-full h-full -z-10 pointer-events-none opacity-75 md:opacity-90"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px)"
				quality={100}
			/>
			<div className="flex flex-col justify-center items-center md:items-start gap-3 w-full pt-12 md:mt-36 md:ps-24 z-10 backdrop-blur md:backdrop-blur-none">
				<h1
					className={`text-3xl md:text-4xl font-medium text-center text-pretty w-[90%] md:w-auto ${mont.className}`}
				>
					Snapshot of AI in action
				</h1>

				<ScrollList list={actions} variant={textSlideToR} />
			</div>
		</div>
	);
};

export default Body;
