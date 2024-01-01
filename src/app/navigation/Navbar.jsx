"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import NavStart from "./navComponents/NavStart";
import NavMid from "./navComponents/NavMid";
import NavEnd from "./navComponents/NavEnd";

import Modal from "../components/Modal";
import HamburgerModal from "../components/modals/HamburgerModal";
import { slideUp } from "../constants/variants";

const Navbar = ({ session }) => {
	const [hamburger, setHamburger] = useState(false);

	const closeHamburger = () => setHamburger(false);
	const toggleHamburger = () => setHamburger(!hamburger);

	return (
		<>
			<nav className="w-full py-4 px-6 md:px-20 flex justify-between items-start">
				<NavStart />
				<NavMid />
				<NavEnd toggleHamburger={toggleHamburger} session={session} />
			</nav>
			<div className="relative w-full mx-auto bg-black z-20">
				<AnimatePresence
					initial={false}
					mode="wait"
					onExitComplete={() => null}
				>
					{hamburger && (
						<Modal
							modalOpen={hamburger}
							handleClose={closeHamburger}
							content={
								<HamburgerModal
									handleClose={closeHamburger}
									session={session}
								/>
							}
							variant={slideUp}
							className="relative"
						/>
					)}
				</AnimatePresence>{" "}
			</div>
		</>
	);
};

export default Navbar;
