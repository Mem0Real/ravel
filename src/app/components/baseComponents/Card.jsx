import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Action from "../dashComponents/operationsComponents/Action";

const Card = ({ id, name, description }) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<motion.div
			className="relative w-[60%] mx-auto border border-white rounded-xl shadow-md shadow-blue-400/80 p-8 pe-24 flex flex-col justify-between items-start gap-4 cursor-pointer hover:bg-neutral-800/70"
			key={id}
			onHoverStart={handleMouseEnter}
			onHoverEnd={handleMouseLeave}
		>
			<h1 className="text-2xl font-bold underline">{name}</h1>
			<h1>{description}</h1>
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0, x: 10 }}
					animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
					exit={{ opacity: 0, x: 10 }}
					transition={{ duration: 0.3 }}
					className="absolute top-1/2 right-4 flex gap-4"
				>
					<Action />
				</motion.div>
			</AnimatePresence>
		</motion.div>
	);
};

export default Card;
