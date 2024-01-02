import React from "react";

import ListView from "./operationsComponents/ListView";

import { Read } from "@/app/serverActions/Read";

const Operations = async () => {
	const tools = await Read();

	return (
		<div className="relative w-full flex flex-col justify-start items-center gap-8 md:pt-5 lg:pt-0">
			<ListView tools={tools} />
		</div>
	);
};

export default Operations;
