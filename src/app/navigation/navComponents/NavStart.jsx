import Link from "next/link";
import React from "react";

import { Orbitron } from "next/font/google";

const orbit = Orbitron({ weight: "800", subsets: ["latin"] });

const NavStart = () => {
	return (
		<Link href="/">
			<h1 className={`text-lg px-4 ${orbit.className}`}>RAVEL</h1>
		</Link>
	);
};

export default NavStart;
