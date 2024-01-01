"use client";

import React from "react";
import { defaultBtn, solidBtn } from "../../constants";

const ButtonWithIcon = ({
	className,
	text = "button",
	position = "right",
	icon,
	handleClick,
	solid,
}) => {
	return position === "left" ? (
		<button
			className={`flex items-center gap-2 ${
				solid ? solidBtn : defaultBtn
			} ${className}`}
			onClick={handleClick}
		>
			{icon}
			{text}
		</button>
	) : (
		<button
			className={`flex items-center gap-2 ${
				solid ? solidBtn : defaultBtn
			} ${className}`}
			onClick={handleClick}
		>
			{text}
			{icon}
		</button>
	);
};

export default ButtonWithIcon;
