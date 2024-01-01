"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import NavStart from "./navComponents/NavStart";
import NavMid from "./navComponents/NavMid";
import NavEnd from "./navComponents/NavEnd";

import Modal from "../components/Modal";
import HamburgerModal from "../components/modals/HamburgerModal";
import { flip, slideFromRight, slideUp } from "../constants/variants";

const Navbar = ({ session }) => {
	const [hamburger, setHamburger] = useState(false);

	const closeHamburger = () => setHamburger(false);
	const toggleHamburger = () => setHamburger(!hamburger);

	return (
		<div className="relative">
			<nav className="w-full py-4 px-6 md:px-20 flex justify-between items-start">
				<NavStart />
				<NavMid />
				<NavEnd toggleHamburger={toggleHamburger} session={session} />
			</nav>
			<div className="fixed top-16 right-0 w-[50%] mx-auto">
				<AnimatePresence
					initial={false}
					mode="wait"
					onExitComplete={() => null}
				>
					{hamburger && (
						<Modal
							handleClose={closeHamburger}
							content={
								<HamburgerModal
									handleClose={closeHamburger}
									session={session}
								/>
							}
							variant={slideFromRight}
						/>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Navbar;
