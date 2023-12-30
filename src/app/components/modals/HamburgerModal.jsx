import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Button from "@/app/components/baseComponents/Button";
import { redBtn } from "@/app/constants";

const HamburgerModal = ({ handleClose }) => {
	const ref = useRef();

	// Close Modal if clicked outside or scrolled
	useEffect(() => {
		const checkIfClickedOutside = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				handleClose();
			}
		};
		document.addEventListener("click", checkIfClickedOutside);
		document.addEventListener("scroll", handleClose);
		return () => {
			document.removeEventListener("click", checkIfClickedOutside);
			document.removeEventListener("scroll", handleClose);
		};
	}, [handleClose]);

	return (
		<div
			ref={ref}
			className="md:hidden fixed bottom-2 pb-12 w-full
	border border-neutral-800/50 py-8 mt-3 rounded-sm bg-neutral-900/80 backdrop-blur-md min-h-[30vh]"
		>
			<div className="flex flex-col justify-around items-start gap-4 ps-16">
				<Link href="/">Home</Link>
				<Link href="/dashboard">Dashboard</Link>
			</div>
			<Button
				text="Logout"
				className={`mt-8 text-xs mx-auto -mb-4 bg-red-500 ${redBtn}`}
			/>
		</div>
	);
};

export default HamburgerModal;
