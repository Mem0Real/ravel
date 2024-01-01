"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

const ScrollList = ({ list, variant }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % list.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="ps-4 text-neutral-500">
			<AnimatePresence mode="wait">
				<motion.div
					initial={variant.hidden}
					animate={variant.visible}
					exit={variant.hidden}
					key={list[currentIndex]}
					transition={{ duration: 0.6 }}
				>
					{list[currentIndex]}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default ScrollList;
