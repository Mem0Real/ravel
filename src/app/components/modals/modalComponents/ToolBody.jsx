import React from "react";

import FramerButton from "../../baseComponents/FramerButton";

import { greenBtn, neutralBtn, redBtn } from "@/app/constants";

import InputComponents from "./InputComponents";
import WarningComponent from "./WarningComponent";

const ToolBody = ({
	tool,
	loading,
	remove,
	handleChange,
	handleSubmit,
	handleClose,
}) => {
	return (
		<div className="flex flex-col justify-center items-center gap-8 w-full pt-12">
			<div className="border-b border-neutral-700/40 w-full flex flex-col gap-5 items-center">
				{remove ? (
					<WarningComponent />
				) : (
					<InputComponents tool={tool} handleChange={handleChange} />
				)}
			</div>

			<div className="flex justify-center gap-5 md:gap-12 items-center mt-5">
				<FramerButton
					handleClick={handleSubmit}
					text={remove ? "Remove" : "Submit"}
					className={remove ? redBtn : greenBtn}
					loading={loading}
				/>
				<FramerButton
					handleClick={handleClose}
					text="Cancel"
					className={neutralBtn}
				/>
			</div>
		</div>
	);
};

export default ToolBody;
