import React, { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "../../Modal";
import ToolModal from "../../modals/ToolModal";

import { flip } from "@/app/constants/variants";

import { Create } from "@/app/serverActions/Create";
import { Update } from "@/app/serverActions/Update";
import { Delete } from "@/app/serverActions/Delete";
import { SelectedContext } from "./ListView";

const ToolForm = () => {
	const { addTool, editTool, deleteTool, closeTool } =
		useContext(SelectedContext);

	return (
		<div className="relative w-[90%] md:w-[50%] lg:w-[30%] mx-auto bg-black z-20">
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
						variant={flip}
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
						variant={flip}
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
							variant={flip}
						/>
					)
				)}
			</AnimatePresence>
		</div>
	);
};

export default ToolForm;
