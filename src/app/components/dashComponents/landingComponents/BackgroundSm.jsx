import React from "react";
import Image from "next/image";

const BackgroundSm = () => {
	return (
		<div className="md:hidden relative w-[100vw] h-[20vh]">
			<Image
				fill
				sizes="(max-width: 768px) 100vw, (max-width: 1200px)"
				className="object-contain object-center"
				src="/images/dashBgSm.webp"
				alt="Assist"
				priority
			/>
		</div>
	);
};

export default BackgroundSm;
