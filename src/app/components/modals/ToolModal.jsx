import React, { useContext, useRef, useState } from "react";

import ToolHeader from "./modalComponents/ToolHeader";
import ToolBody from "./modalComponents/ToolBody";
import useOutsideClick from "@/hooks/useOutsideClick";
import { SelectedContext } from "../dashComponents/operationsComponents/ListView";
import toast from "react-hot-toast";

const ToolModal = ({ title, handleClose, operation, remove }) => {
	const { selectedTool, setSearchText } = useContext(SelectedContext);

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
		let successText = "";

		if (title.includes("Add")) successText = `${tool.name} added successfully!`;
		else if (title.includes("Edit"))
			successText = `${selectedTool.name} updated successfully!`;
		else if (title.includes("Delete"))
			successText = `${tool.name} removed successfully!`;

		const toastId = toast.loading("Processing...");
		setLoading(true);

		try {
			if (selectedTool?.id) await operation(selectedTool?.id, tool);
			else await operation(tool);

			setLoading(false);
			toast.remove(toastId);
			toast.success(successText);

			setSearchText("");

			setTool({ name: "", description: "" });
			handleClose();
		} catch (error) {
			setLoading(false);
			toast.error(error);
		}
	};

	return (
		<div
			ref={ref}
			className={`absolute w-full -top-7 md:-top-36
			border border-neutral-800/50"
			py-8 px-4 mt-3 rounded-lg bg-neutral-900/70 backdrop-blur-sm min-h-56`}
			// className="h-[95%] w-[90%] sm:w-[75%] md:w-[40%] lg:w-[30%] my-5 md:py-3 ml-auto overflow-y-scroll no-scrollbar rounded-lg bg-neutral-300 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200"
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
