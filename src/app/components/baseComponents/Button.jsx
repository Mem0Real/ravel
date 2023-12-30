"use client";

import React from "react";
import { defaultBtn } from "../../constants";

const Button = ({ className, text = "button", handleClick }) => {
	return (
		<button className={`${defaultBtn} ${className}`} onClick={handleClick}>
			{text}
		</button>
	);
};

export default Button;
