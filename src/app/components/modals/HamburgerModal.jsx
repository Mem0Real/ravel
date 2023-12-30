import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Button from "@/app/baseComponents/Button";
import { redBtn } from "@/app/constants";

const HamburgerModal = ({ handleClose }) => {
	const ref = useRef();

	// Close Modal if clicked outside
	useEffect(() => {
		const checkIfClickedOutside = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				handleClose();
			}
		};
		document.addEventListener("click", checkIfClickedOutside);
		return () => {
			document.removeEventListener("click", checkIfClickedOutside);
		};
	}, [handleClose]);

	return (
		<div
			ref={ref}
			className="md:hidden absolute
	flex flex-col justify-around items-start gap-4 w-full border border-neutral-800/50 py-8 px-4 mt-3 rounded-sm bg-neutral-900/80 backdrop-blur-sm "
		>
			<Link href="/">Home</Link>
			<Link href="/dashboard">Dashboard</Link>

			<Button
				text="Logout"
				className={`mt-8 text-xs mx-auto -mb-4 bg-red-500 ${redBtn}`}
			/>
		</div>
	);
};

export default HamburgerModal;
