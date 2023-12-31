import React from "react";

const Card = ({ name, description }) => {
	return (
		<>
			<h1 className="text-2xl font-bold underline">{name}</h1>
			<h1>{description}</h1>
		</>
	);
};

export default Card;
