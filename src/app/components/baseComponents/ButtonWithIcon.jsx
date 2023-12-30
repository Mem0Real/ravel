"use client";

import React from "react";
import { defaultBtn } from "../../constants";

const ButtonWithIcon = ({
	className,
	text = "button",
	position = "right",
	icon,
	handleClick,
}) => {
	return position === "left" ? (
		<button
			className={`flex items-center gap-2 ${defaultBtn} ${className}`}
			onClick={handleClick}
		>
			{icon}
			{text}
		</button>
	) : (
		<button
			className={`flex items-center gap-2 ${defaultBtn} ${className}`}
			onClick={handleClick}
		>
			{text}
			{icon}
		</button>
	);
};

export default ButtonWithIcon;
