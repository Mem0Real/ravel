import React from "react";
import { motion } from "framer-motion";
import { defaultBtn } from "../../constants";

const FramerButton = ({
	className,
	text = "button",
	handleClick,
	icon = false,
	loading = false,
}) => {
	return (
		<motion.button
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			className={`${!icon && defaultBtn} ${className} ${
				loading && "opacity-35"
			}`}
			onClick={handleClick}
			disabled={loading}
		>
			{text}
		</motion.button>
	);
};

export default FramerButton;
