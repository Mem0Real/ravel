"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { signOut } from "next-auth/react";

import FramerButton from "../baseComponents/FramerButton";
import { redBtn } from "@/app/constants";

import toast from "react-hot-toast";
import { motion } from "framer-motion";

import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: "400", subsets: ["latin"] });

const HamburgerModal = ({ handleClose, session }) => {
	const ref = useRef();
	const router = useRouter();

	const path = usePathname();

	const links = [
		{ href: "/", label: "Home" },
		{ href: "/dashboard", label: "Dashboard" },
	];

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
		handleClose();
		const toastId = toast.loading("Logging out");

		await signOut({ callbackUrl: "/" });

		toast.remove(toastId);
		toast("Logged out");

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
				{links.map(({ href, label }) => {
					return (
						<Link key={label} href={href} className="relative group">
							{path === href && (
								<motion.span
									layoutId="active-underline-hamburger"
									className="absolute right-0 top-full block h-[2px] w-full bg-neutral-800 dark:bg-neutral-200 mt-0.5"
								/>
							)}
							<span
								key={href}
								className={`text-sm text-neutral-700 p-1 dark:text-neutral-300 rounded-md backdrop-blur-md transition-all duration-200 ease-in-out hover:text-neutral-900 dark:hover:text-neutral-100 ${raleway.className}`}
							>
								{label}
							</span>
						</Link>
					);
				})}
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
