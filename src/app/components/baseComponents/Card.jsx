import React from "react";
import { Montserrat } from "next/font/google";

const raleway = Montserrat({ subsets: ["latin"] });

const Card = ({ name, description }) => {
	return (
		<>
			<h1
				className={`text-2xl md:text-3xl font-bold underline ${raleway.className}`}
			>
				{name}
			</h1>
			<h1>{description}</h1>
		</>
	);
};

export default Card;
