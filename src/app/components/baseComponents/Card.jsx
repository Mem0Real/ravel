import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Action from "../dashComponents/operationsComponents/Action";

const Card = ({ id, name, description }) => {
	const [menu, setMenu] = useState({ id: "", state: false });
	const [isMobile, setIsMobile] = useState(false);

	// Check if device is desktop or mobile
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(global.window && window.innerWidth < 768);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const handleMouseEnter = (id, isMobile) => {
		if (!isMobile) {
			if (menu.id === id) {
				setMenu({ id: id, state: !menu.state });
			} else {
				setMenu({ id: id, state: true });
			}
		}
	};

	const handleMouseLeave = (id, isMobile) => {
		if (!isMobile) {
			if (menu.id === id) {
				setMenu({ id: id, state: false });
			}
		}
	};

	const handleTap = (id) => {
		if (menu.id === id) {
			setMenu({ id: id, state: !menu.state });
		} else {
			setMenu({ id: id, state: true });
		}
	};

	return (
		<motion.div
			className="relative w-[60%] mx-auto border border-white rounded-xl shadow-md shadow-blue-400/80 p-8 pe-16 md:pe-24 flex flex-col justify-between items-start gap-4 cursor-pointer hover:bg-neutral-800/70"
			key={id}
			onHoverStart={() => handleMouseEnter(id, isMobile)}
			onHoverEnd={() => handleMouseLeave(id, isMobile)}
		>
			<motion.div onTap={() => handleTap(id)}>
				<h1 className="text-2xl font-bold underline">{name}</h1>
				<h1>{description}</h1>
			</motion.div>
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0, x: 10 }}
					animate={
						menu.id === id && menu.state
							? { opacity: 1, x: 0 }
							: { opacity: 0, x: 10 }
					}
					exit={{ opacity: 0, x: 10 }}
					transition={{ duration: 0.3 }}
					className="absolute top-0 right-4 h-full"
				>
					<Action id={id} />
				</motion.div>
			</AnimatePresence>
		</motion.div>
	);
};

export default Card;