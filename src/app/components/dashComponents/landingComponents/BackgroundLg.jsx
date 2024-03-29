import React from "react";
import Image from "next/image";

const BackgroundLg = () => {
	return (
		<div className="hidden md:block basis-1/3 relative w-[20vw] h-[9.8em] -mt-2 -ml-12">
			<Image
				fill
				sizes="(max-width: 768px) 100vw, (max-width: 1200px)"
				className="object-contain object-left"
				src="/images/dashBg.webp"
				alt="Assist"
				priority
			/>
		</div>
	);
};

export default BackgroundLg;
