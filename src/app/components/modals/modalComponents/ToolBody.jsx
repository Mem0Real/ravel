import React from "react";

import Input from "../../baseComponents/Input";
import TextArea from "../../baseComponents/TextArea";
import FramerButton from "../../baseComponents/FramerButton";

import { greenBtn } from "@/app/constants";

const ToolBody = ({ tool, handleChange, handleSubmit, loading }) => {
	return (
		<div className="flex flex-col justify-center items-center gap-8 w-full py-12">
			<Input
				name="name"
				placeholder="Title"
				className="w-[70%] mx-auto"
				handleChange={handleChange}
				value={tool.name || ""}
			/>
			<TextArea
				cols={20}
				rows={5}
				name="description"
				placeholder="Description"
				className=" w-[70%] mx-auto"
				handleChange={handleChange}
				value={tool.description || ""}
			/>
			<FramerButton
				handleClick={handleSubmit}
				text="Submit"
				className={greenBtn}
				loading={loading}
			/>
		</div>
	);
};

export default ToolBody;
