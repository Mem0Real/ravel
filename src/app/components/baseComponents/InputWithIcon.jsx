import React from "react";
import { Montserrat_Alternates } from "next/font/google";

const mont = Montserrat_Alternates({ weight: "400", subsets: ["latin"] });

const InputWithIcon = ({
	name,
	type = "text",
	placeholder,
	className,
	handleChange,
	icon,
}) => {
	return (
		<div
			className={`border-b border-neutral-300/70 p-2 flex justify-between items-center relative  ${className}`}
		>
			<input
				name={name}
				type={type}
				placeholder={placeholder}
				className={` bg-transparent border-none outline-none placeholder:text-neutral-600 placeholder:${mont.className}`}
				onChange={handleChange}
			/>
			<div className="absolute -right-3 -z-10 pointer-events-none">{icon}</div>
		</div>
	);
};

export default InputWithIcon;
