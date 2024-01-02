import React from "react";

const Skeleton = () => {
	return (
		<div
			className="w-[70vw] h-[60vh] md:h-[30vh] mx-auto border border-white/35 rounded-xl shadow-md shadow-blue-400/40 flex flex-col justify-between items-start gap-4 grayscale mb-16"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3 }}
		>
			<div className="flex flex-col gap-5 items-start w-full overflow-hidden">
				<div className="h-12 w-[40vw] md:w-[18vw] mt-5 ms-7 bg-neutral-900 rounded-lg animate-pulse" />
				<div className="h-[40vh] md:h-32 w-[45vw] md:w-[58vw] mx-auto mb-5 ms-7 bg-neutral-900 rounded-lg animate-pulse" />
			</div>
		</div>
	);
};

export default Skeleton;
