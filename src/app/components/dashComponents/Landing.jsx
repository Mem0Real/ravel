import Image from "next/image";
import React from "react";

const Landing = () => {
	return (
		<div className="min-h-screen relative flex justify-center items-start w-fit mx-auto -mt-5 ps-36">
			<div className="basis-5/6 flex flex-col gap-3 justify-start items-start text-pretty shadow-lg shadow-white/30 py-7 pb-12 rounded-xl pe-16">
				<h1 className="text-3xl px-10 md:px-12 md:text-5xl w-fully text-start">
					How can{" "}
					<span className="text-5xl md:text-7xl font-semibold italic">AI</span>
				</h1>
				<h1 className="text-3xl md:text-5xl text-pretty text-start ps-16">
					be of assistance to you?
				</h1>
			</div>
			<div className="basis-1/3 relative w-[20vw] h-[30vh] mt-2 -ml-12">
				<Image
					// width={5000}
					// height={5000}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px)"
					className="object-contain object-left"
					src="/images/dashBg.png"
					alt="Assist"
					priority
				/>
			</div>
		</div>
	);
};

export default Landing;
