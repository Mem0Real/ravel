import React from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const LandingText = () => {
	return (
		<div
			className={`basis-5/6 w-full mx-auto flex flex-col gap-0 md:gap-3 justify-center items-center text-center shadow-lg shadow-white/30 py-7 pb-5 md:pb-4 rounded-xl pe-4 ms-auto lg:ms-12 -mt-8 md:mt-0 subpixel-antialiased ${raleway.className}`}
		>
			<h1 className="text-3xl px-10 md:px-12 md:text-5xl w-full ps-5 md:ps-auto text-center">
				What an <b>AI</b> could do for you
			</h1>
		</div>
	);
};

export default LandingText;
