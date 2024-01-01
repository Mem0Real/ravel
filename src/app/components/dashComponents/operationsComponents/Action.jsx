import React, { useContext, useState } from "react";
import FramerButton from "../../baseComponents/FramerButton";

import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { ActionContext } from "./ListView";

const Action = ({ id, name, description }) => {
	const { handleEdit, handleDelete } = useContext(ActionContext);

	return (
		<div
			className={`h-full flex flex-col justify-center gap-16 md:gap-12 items-end md:px-4 py-5`}
		>
			<FramerButton
				text={<CiEdit size={24} color="#0E86D4" />}
				icon
				handleClick={() => handleEdit(id, name, description)}
			/>
			<FramerButton
				text={<MdDeleteOutline size={24} color="#f44" />}
				icon
				handleClick={() => handleDelete(id, name)}
			/>
		</div>
	);
};

export default Action;
