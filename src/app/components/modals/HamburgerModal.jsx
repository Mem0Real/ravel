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
			className={`md:hidden w-full rounded-bl-lg bg-black flex flex-col justify-center items-start gap-5 ${
				!session ? "pt-2 pb-12" : "py-2"
			}`}
		>
			<div className="flex flex-col justify-around items-start gap-4 ps-4 pt-5">
				<Link href="/">Home</Link>
				<Link href="/dashboard">Dashboard</Link>
			</div>
			{session && (
				<FramerButton
					text="Logout"
					className={`mt-8 text-xs mx-auto bg-red-500 ${redBtn} ${
						!session && "hidden"
					}`}
					handleClick={handleSignOut}
				/>
			)}
		</div>
	);
};

export default HamburgerModal;
