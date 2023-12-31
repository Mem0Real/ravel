import React from "react";

import ListView from "./operationsComponents/ListView";

import { Read } from "@/app/serverActions/Read";

const Operations = async () => {
	const tools = await Read();

	return (
		<div className="w-full flex flex-col justify-start items-center gap-8 mt-7 md:-mt-5">
			{/* <div className="w-[20%] mx-auto"> */}
			<ListView tools={tools} />
			{/* </div> */}
			{/* <List tools={tools} /> */}
		</div>
	);
};

export default Operations;
