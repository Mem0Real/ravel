import React from "react";

const TextArea = ({
	cols,
	rows,
	name,
	placeholder,
	className,
	handleChange,
	value,
}) => {
	return (
		<div className={`p-2 border-b ${className}`}>
			<textarea
				cols={cols}
				rows={rows}
				name={name}
				placeholder={placeholder}
				className="bg-transparent border-none outline-none w-full placeholder:text-neutral-600"
				onChange={handleChange}
				value={value}
			/>
		</div>
	);
};

export default TextArea;
