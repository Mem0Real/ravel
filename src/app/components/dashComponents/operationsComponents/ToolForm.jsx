import React, { useContext, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "../../Modal";
import ToolModal from "../../modals/ToolModal";

import { zoom } from "@/app/constants/variants";

import { Create } from "@/app/serverActions/Create";
import { Update } from "@/app/serverActions/Update";
import { Delete } from "@/app/serverActions/Delete";
import { SelectedContext } from "./ListView";
import useScrollModal from "@/hooks/useScrollModal";

const ToolForm = () => {
	const { addTool, editTool, deleteTool, closeTool, modalRef } =
		useContext(SelectedContext);

	useScrollModal(modalRef, addTool || editTool || deleteTool);
	return (
		<div
			className={`fixed -top-10 bottom-0 right-0 left-0 z-50 ${
				addTool || editTool || deleteTool
					? "backdrop-blur-sm pointer-events-auto bg-black/50"
					: "pointer-events-none"
			}`}
		>
			<AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
				{addTool ? (
					<Modal
						handleClose={() => closeTool("add")}
						content={
							<ToolModal
								title="Add Tool"
								operation={Create}
								handleClose={() => closeTool("add")}
							/>
						}
						variant={zoom}
						className="mt-24 md:mt-56 w-[90%] md:w-[50%] lg:w-[30%] mx-auto "
					/>
				) : editTool ? (
					<Modal
						handleClose={() => closeTool("edit")}
						content={
							<ToolModal
								title="Edit Tool"
								operation={Update}
								handleClose={() => closeTool("edit")}
							/>
						}
						variant={zoom}
						className="mt-24 md:mt-56 w-[90%] md:w-[50%] lg:w-[30%] mx-auto "
					/>
				) : (
					deleteTool && (
						<Modal
							handleClose={() => closeTool("delete")}
							content={
								<ToolModal
									title="Delete Tool"
									operation={Delete}
									handleClose={() => closeTool("delete")}
									remove
								/>
							}
							variant={zoom}
							className="mt-24 md:mt-56 w-[90%] md:w-[50%] lg:w-[30%] mx-auto "
						/>
					)
				)}
			</AnimatePresence>
		</div>
	);
};

export default ToolForm;
