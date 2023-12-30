import React from "react";
import FramerButton from "../../baseComponents/FramerButton";

import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const Action = ({ id }) => {
	const handleEditClick = async () => {
		console.log("edit clicked");
		console.log(id);
	};
	const handleDeleteClick = async () => {
		console.log("Delete clicked");
		console.log(id);
	};
	return (
		<div
			className={`h-full flex flex-col justify-center gap-16 md:gap-12 items-end md:px-4 py-5`}
		>
			<FramerButton
				text={<CiEdit size={24} color="#0E86D4" />}
				icon
				handleClick={handleEditClick}
			/>
			<FramerButton
				text={<MdDeleteOutline size={24} color="#f44" />}
				icon
				handleClick={handleDeleteClick}
			/>
		</div>
	);
};

export default Action;
