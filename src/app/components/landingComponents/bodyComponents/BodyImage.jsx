import React from "react";
import Image from "next/image";

const BodyImage = () => {
	return (
		<div className="h-[35em] w-[99vw] relative ">
			<Image
				fill
				src="/images/homeBodyBg2.png"
				alt=""
				className="absolute object-cover w-full h-full"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px)"
				quality={100}
			/>
		</div>
	);
};

export default BodyImage;
