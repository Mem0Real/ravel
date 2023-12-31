import React from "react";

import ListView from "./operationsComponents/ListView";

import { readTools } from "@/app/serverActions/readTools";

const Operations = async () => {
	const tools = await readTools();

	return (
		<div className="w-full flex flex-col justify-start items-center gap-8 mt-7 md:-mt-5">
			<ListView tools={tools} />
		</div>
	);
};

export default Operations;
