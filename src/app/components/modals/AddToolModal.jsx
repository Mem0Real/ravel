import React, { useEffect, useRef, useState } from "react";

import FramerButton from "../baseComponents/FramerButton";

import { MdOutlineClose } from "react-icons/md";
import { Create } from "@/app/serverActions/createTool";
import AddModalBody from "./modalComponents/AddModalBody";

const AddToolModal = ({ handleClose }) => {
	const [newTool, setNewTool] = useState({ name: "", description: "" });
	const [loading, setLoading] = useState(false);

	const ref = useRef();

	// Close Modal if clicked outside
	useEffect(() => {
		const checkIfClickedOutside = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				handleClose();
			}
		};
		document.addEventListener("click", checkIfClickedOutside);
		return () => {
			document.removeEventListener("click", checkIfClickedOutside);
		};
	}, [handleClose]);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setNewTool({
			...newTool,
			[name]: value,
		});
	};

	const handleSubmit = async () => {
		setLoading(true);

		try {
			await Create(newTool);
			setLoading(false);
			setNewTool({ name: "", description: "" });
			handleClose();
		} catch (error) {
			setLoading(false);
			console.log("Error", error);
		}
	};

	return (
		<div
			ref={ref}
			className="absolute w-full -top-12 md:-top-36
	border border-neutral-800/50 py-8 px-4 mt-3 rounded-lg bg-neutral-900/70 backdrop-blur-md min-h-56"
		>
			<div className="relative flex flex-col justify-between items-center gap-4 py-6 border-b border-neutral-700/40">
				<h1 className="text-3xl underline subpixel-antialiased">Add Tool</h1>
				<FramerButton
					handleClick={handleClose}
					className="absolute right-2 -top-3"
					text={<MdOutlineClose />}
				/>
			</div>
			<AddModalBody
				newTool={newTool}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				loading={loading}
			/>
		</div>
	);
};

export default AddToolModal;
