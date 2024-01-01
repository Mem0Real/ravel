import React from "react";

const WarningComponent = ({ name }) => {
	return (
		<div className="w-[95%] md:w-[90%] mx-auto text-neutral-100 text-lg text-center border-b border-neutral-700 pb-12">
			Are you sure you want to remove {name}?
		</div>
	);
};

export default WarningComponent;
