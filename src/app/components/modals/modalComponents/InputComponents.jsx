import React from "react";
import Input from "../../baseComponents/Input";
import TextArea from "../../baseComponents/TextArea";

const InputComponents = ({ tool, handleChange }) => {
	return (
		<>
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
		</>
	);
};

export default InputComponents;
