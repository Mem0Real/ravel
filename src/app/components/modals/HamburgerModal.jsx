import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { signOut } from "next-auth/react";

import FramerButton from "../baseComponents/FramerButton";
import { redBtn } from "@/app/constants";

import toast from "react-hot-toast";

const HamburgerModal = ({ handleClose, session }) => {
	const ref = useRef();
	const router = useRouter();

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

	const handleSignOut = async () => {
		const toastId = toast.loading("Logging out");

		await signOut({ callbackUrl: "/" });

		toast.remove(toastId);
		toast("Logged out");

		handleClose();
		// Refresh the page to update the session
		router.push("/");
		router.refresh("/");
	};

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
			<FramerButton
				text="Logout"
				className={`mt-8 text-xs mx-auto -mb-4 bg-red-500 ${redBtn} ${
					!session && "invisible"
				}`}
				handleClick={handleSignOut}
			/>
		</div>
	);
};

export default HamburgerModal;
