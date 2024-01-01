import React from "react";
import { Montserrat } from "next/font/google";

const mont = Montserrat({ weight: "400", subsets: ["latin"] });

const Card = ({ name, description }) => {
	return (
		<>
			<h1
				className={`text-2xl md:text-3xl font-bold underline tracking-wide ${mont.className}`}
			>
				{name}
			</h1>
			<h1>{description}</h1>
		</>
	);
};

export default Card;
