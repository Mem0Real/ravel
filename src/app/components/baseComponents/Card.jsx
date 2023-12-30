import React from "react";

const Card = ({ id, name, description }) => {
	return (
		<div
			className="w-[60%] mx-auto border border-white rounded-xl shadow-md shadow-blue-400/80 p-8 flex flex-col justify-between items-start gap-4"
			key={id}
		>
			<h1 className="text-2xl font-bold underline">{name}</h1>
			<h1>{description}</h1>
		</div>
	);
};

export default Card;
