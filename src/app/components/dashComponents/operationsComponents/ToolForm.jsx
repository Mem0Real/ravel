import React from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "../../Modal";
import ToolModal from "../../modals/ToolModal";

import { flip } from "@/app/constants/variants";

import { createTool } from "@/app/serverActions/createTool";
import { updateTool } from "@/app/serverActions/updateTool";
import { removeTool } from "@/app/serverActions/removeTool";

const ToolForm = ({ addTool, editTool, deleteTool, closeTool }) => {
	return (
		<div className="relative w-[90%] md:w-[50%] mx-auto bg-black z-20">
			<AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
				{addTool ? (
					<Modal
						handleClose={() => closeTool("add")}
						content={
							<ToolModal
								operation={createTool}
								handleClose={() => closeTool("add")}
							/>
						}
						variant={flip}
					/>
				) : editTool ? (
					<Modal
						handleClose={() => closeTool("edit")}
						content={
							<ToolModal
								title="Edit Tool"
								operation={updateTool}
								handleClose={() => closeTool("edit")}
							/>
						}
						variant={flip}
					/>
				) : (
					deleteTool && (
						<Modal
							handleClose={() => closeTool("delete")}
							content={
								<ToolModal
									title="Delete Tool"
									operation={removeTool}
									handleClose={() => closeTool("delete")}
								/>
							}
							variant={flip}
						/>
					)
				)}
			</AnimatePresence>
		</div>
	);
};

export default ToolForm;
