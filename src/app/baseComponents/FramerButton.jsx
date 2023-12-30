import React from "react";
import { motion } from "framer-motion";
import { defaultBtn } from "../constants";

const FramerButton = ({ className, text = "button", handleClick }) => {
	return (
		<motion.button
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			className={`${defaultBtn} ${className}`}
			onClick={handleClick}
		>
			{text}
		</motion.button>
	);
};

export default FramerButton;
