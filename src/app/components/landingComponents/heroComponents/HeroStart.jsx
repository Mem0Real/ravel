import React from "react";
import { Orbitron } from "next/font/google";
import { MdOutlineChevronRight } from "react-icons/md";
import ButtonWithIcon from "../../baseComponents/ButtonWithIcon";
import { whiteBtn } from "../../../constants";

const raleway = Orbitron({ weight: "700", subsets: ["latin"] });

const HeroStart = () => {
	return (
		<div className="flex flex-col gap-8 items-center md:items-start">
			<h1
				className={`text-pretty leading-[1.1] subpixel-antialiased text-4xl md:text-6xl font-extrabold text-white/90  ${raleway.className}`}
			>
				AI: Your trusted guide to a brighter future.
			</h1>

			<ButtonWithIcon
				text="Get Started"
				icon={<MdOutlineChevronRight size={24} />}
				className={`rounded-full bg-neutral-800/80 md:bg-transparent ${whiteBtn}`}
			/>
		</div>
	);
};

export default HeroStart;
