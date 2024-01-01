"use client";

import React, { useCallback, useEffect, useState } from "react";
import Card from "../../baseComponents/Card";

import {
	AnimatePresence,
	motion,
	useMotionValue,
	useMotionTemplate,
} from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

import Action from "./Action";

const List = ({ tools }) => {
	const [menu, setMenu] = useState({ id: "", state: false });

	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	const isMobile = useIsMobile();

	// Hover Effects
	const handleMouseEnter = useCallback((id) => {
		if (!isMobile) {
			if (menu.id === id) {
				setMenu({ id: id, state: !menu.state });
			} else {
				setMenu({ id: id, state: true });
			}
		}
	});

	const handleMouseLeave = useCallback((id) => {
		if (!isMobile) {
			if (menu.id === id) {
				setMenu({ id: "", state: false });
			}
		}
	});

	const handleTap = (id) => {
		console.log(`MnuId: ${menu.id}`);
		console.log(`ID: ${id}`);

		if (isMobile) {
			if (menu.id === id) {
				setMenu({ id: id, state: !menu.state });
			} else {
				setMenu({ id: id, state: true });
			}
		} else {
			console.log("NOt Mb");
		}
	};

	const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
		if (!isMobile) {
			let { left, top } = currentTarget.getBoundingClientRect();

			mouseX.set(clientX - left);
			mouseY.set(clientY - top);
		}
	};

	useEffect(() => {
		console.log(menu);
	}, [menu]);
	const bgTemplate = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgb(200 200 200 / 0.15) 0%, transparent 80%)`;

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="flex flex-col gap-8 justify-between items-center pb-8">
				{tools.map(({ id, name, description }) => {
					return (
						<motion.div
							className="relative overflow-hidden w-[60%] mx-auto border border-white rounded-xl shadow-md shadow-blue-400/80 p-8 pe-16 md:pe-24 flex flex-col justify-between items-start gap-4 cursor-pointer"
							key={id}
							onHoverStart={() => handleMouseEnter(id)}
							onHoverEnd={() => handleMouseLeave(id)}
							onMouseMove={handleMouseMove}
						>
							{menu.id === id && menu.state && (
								<motion.div
									className="inset-0 absolute"
									style={{
										background: bgTemplate,
									}}
								/>
							)}
							<motion.div onTap={() => handleTap(id)} className="">
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
					);
				})}
			</div>
		</div>
	);
};

export default List;
