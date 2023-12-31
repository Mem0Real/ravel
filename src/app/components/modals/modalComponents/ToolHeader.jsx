import React from "react";
import { MdOutlineClose } from "react-icons/md";

import FramerButton from "../../baseComponents/FramerButton";

const ToolHeader = ({ title, handleClose }) => {
	return (
		<div className="relative flex flex-col justify-between items-center gap-4 py-6 border-b border-neutral-700/40 ">
			<h1 className="text-3xl underline subpixel-antialiased">{title}</h1>
			<FramerButton
				handleClick={handleClose}
				className={`absolute right-2 -top-3 text-white`}
				text={<MdOutlineClose size={24} />}
				icon
			/>
		</div>
	);
};

export default ToolHeader;
