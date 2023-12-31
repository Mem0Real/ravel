import React, { useContext, useRef, useState } from "react";

import ToolHeader from "./modalComponents/ToolHeader";
import ToolBody from "./modalComponents/ToolBody";
import useOutsideClick from "@/hooks/useOutsideClick";
import { SelectedContext } from "../dashComponents/operationsComponents/ListView";

const ToolModal = ({ title, handleClose, operation, remove }) => {
	const { selectedTool } = useContext(SelectedContext);

	const [tool, setTool] = useState(
		selectedTool ?? { name: "", description: "" }
	);
	const [loading, setLoading] = useState(false);

	const ref = useRef();

	// Close Modal if clicked outside
	useOutsideClick(ref, handleClose);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setTool({
			...tool,
			[name]: value,
		});
	};

	const handleSubmit = async () => {
		setLoading(true);

		try {
			if (selectedTool?.id) await operation(selectedTool?.id, tool);
			else await operation(tool);

			setLoading(false);
			setTool({ name: "", description: "" });
			handleClose();
		} catch (error) {
			setLoading(false);
			console.log("Error", error);
		}
	};

	return (
		<div
			ref={ref}
			className={`absolute w-full -top-12 md:-top-36
	border ${
		remove ? "border-red-950 text-red-400/70" : "border-neutral-800/50"
	} py-8 px-4 mt-3 rounded-lg bg-neutral-900/70 backdrop-blur-md min-h-56`}
		>
			<ToolHeader title={title} handleClose={handleClose} />
			<ToolBody
				tool={tool}
				loading={loading}
				operation={operation}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				handleClose={handleClose}
				remove={remove}
			/>
		</div>
	);
};

export default ToolModal;
