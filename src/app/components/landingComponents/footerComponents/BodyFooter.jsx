import { Orbitron } from "next/font/google";
import React from "react";
import FooterCard from "./FooterCard";

import { LuBrainCog } from "react-icons/lu";
import { GiSmart, GiThink, GiArtificialIntelligence } from "react-icons/gi";
import { PiVirtualReality } from "react-icons/pi";
import { FaSpaceShuttle } from "react-icons/fa";

const orbit = Orbitron({ weight: "400", subsets: ["latin"] });

const cards = [
	{
		icon: <GiSmart size={64} />,
		name: "Superintelligence",
		details:
			"Imagine machines surpassing human intelligence in every way, tackling complex problems we can't even fathom. ",
	},
	{
		icon: <LuBrainCog size={64} />,
		name: "Human-AI Fusion",
		details:
			"Imagine bionic limbs controlled by thought, instant language translation through implants, or accessing the collective knowledge of the internet directly through your brain.",
	},
	{
		icon: <GiThink size={64} />,
		name: "Conscious Machines",
		details:
			"Sentient AI could become our companions, collaborators, or even rivals, challenging our understanding of what it means to be alive.",
	},
	{
		icon: <GiArtificialIntelligence size={64} />,
		name: "AI Uplift",
		details:
			"AI could surpass human intelligence in all aspects, potentially leading to dramatic changes in society and technology.",
	},
	{
		icon: <PiVirtualReality size={64} />,
		name: "Simulated Realities",
		details:
			"Imagine living, working, and learning in breathtaking digital landscapes, limited only by the power of our imagination.",
	},
	{
		icon: <FaSpaceShuttle size={64} />,
		name: "Spacefaring AI",
		details:
			"Imagine AI probes venturing beyond the limits of human travel, paving the way for interstellar expansion.",
	},
];

const Footer = () => {
	return (
		<div className="min-h-screen flex flex-col w-full">
			<div className="flex flex-col h-full gap-24">
				<div className="basis-1/6 h-full">
					<h1
						className={`lg:px-32 text-3xl md:text-5xl font-semibold ${orbit.className}`}
					>
						Glimpse of AI&apos;s future in human civilization
					</h1>
				</div>
				<div className="basis-5/6 flex gap-10 gap-y-24 flex-wrap justify-evenly items-center pt-0 md:pt-12 pb-16">
					{cards.map((card, index) => (
						<React.Fragment key={index}>
							<FooterCard card={card} />
						</React.Fragment>
					))}
				</div>
			</div>
		</div>
	);
};

export default Footer;
