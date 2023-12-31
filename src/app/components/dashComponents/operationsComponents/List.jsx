"use client";

import React, { useState } from "react";
import Card from "../../baseComponents/Card";

import { AnimatePresence, motion } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

import Action from "./Action";

const List = ({ tools }) => {
	const [menu, setMenu] = useState({ id: "", state: false });

	const isMobile = useIsMobile();

	// Hover Effects
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
		if (isMobile) {
			if (menu.id === id) {
				setMenu({ id: id, state: !menu.state });
			} else {
				setMenu({ id: id, state: true });
			}
		}
	};

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="flex flex-col gap-8 justify-between items-center pb-8">
				{tools.map(({ id, name, description }) => (
					<motion.div
						className="relative w-[60%] mx-auto border border-white rounded-xl shadow-md shadow-blue-400/80 p-8 pe-16 md:pe-24 flex flex-col justify-between items-start gap-4 cursor-pointer hover:bg-neutral-800/70"
						key={id}
						onHoverStart={() => handleMouseEnter(id, isMobile)}
						onHoverEnd={() => handleMouseLeave(id, isMobile)}
					>
						<motion.div onTap={() => handleTap(id)}>
							<React.Fragment key={id}>
								<Card id={id} name={name} description={description} />
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
										<Action id={id} name={name} description={description} />
									</motion.div>
								</AnimatePresence>
							</React.Fragment>
						</motion.div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default List;
