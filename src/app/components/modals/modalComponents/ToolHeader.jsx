import React from "react";
import { MdOutlineClose } from "react-icons/md";

import FramerButton from "../../baseComponents/FramerButton";
import { Montserrat } from "next/font/google";

const mont = Montserrat({ weight: "500", subsets: ["latin"] });

const ToolHeader = ({ title, handleClose }) => {
	return (
		<div className="relative flex flex-col justify-between items-center gap-4 py-6 border-b border-neutral-700/40 ">
			<h1 className={`text-3xl subpixel-antialiased ${mont.className}`}>
				{title}
			</h1>
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
