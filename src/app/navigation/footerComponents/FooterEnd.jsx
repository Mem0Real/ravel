import { Raleway } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const raleway = Raleway({ weight: "400", subsets: ["latin"] });
const FooterEnd = () => {
	return (
		<div className="flex justify-evenly md:justify-between items-center text-sm font-light text-center">
			<p className={raleway.className}>Web developed by:</p>
			<Link href="https://github.com/Mem0Real" className="" target="_blank">
				<div className="relative w-36 h-16">
					<Image
						src="/images/memoreal.webp"
						alt="Mem0Real"
						fill
						sizes="(max-width: 768px) 50vw"
						className="absolute object-contain object-center"
					/>
				</div>
			</Link>
		</div>
	);
};

export default FooterEnd;
