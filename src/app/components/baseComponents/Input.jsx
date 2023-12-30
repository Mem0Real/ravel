"use client";
import React from "react";

const Input = ({
	name,
	type = "text",
	placeholder,
	value,
	error,
	className,
}) => {
	return (
		<div className={`px-1.5 py-1.5 border-b ${className}`}>
			<input
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				className={`bg-transparent border-none outline-none`}
			/>
		</div>
	);
};

export default Input;
