import Image from "next/image";
import React from "react";

const HeroEnd = () => {
	return (
		<div className="relative w-[70vw] md:w-[40vw] h-[40vh] md:h-[80vh]">
			<Image
				src="/images/hero.webp"
				fill
				className="object-contain -z-50"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				alt="Takeover"
				priority
			/>
		</div>
	);
};

export default HeroEnd;
