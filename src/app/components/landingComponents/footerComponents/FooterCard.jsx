import React from "react";

import styles from "./footer.module.css";
import { Montserrat } from "next/font/google";

const mont = Montserrat({ weight: "600", subsets: ["latin"] });

const FooterCard = ({ card }) => {
	return (
		<div
			className={`w-80 min-h-80 h-fit flex flex-col justify-evenly items-start gap-5 ${styles.card}`}
		>
			<div className="text-white">{card.icon}</div>
			<div className={`text-white text-lg ${mont.className}`}>{card.name}</div>
			<div className="text-white">{card.details}</div>
		</div>
	);
};

export default FooterCard;
