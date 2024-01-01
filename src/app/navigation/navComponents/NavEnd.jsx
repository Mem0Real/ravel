"use client";

import React from "react";

import { CiMenuFries } from "react-icons/ci";
import { redBtn } from "@/app/constants";
import FramerButton from "@/app/components/baseComponents/FramerButton";

import { deleteCookie } from "cookies-next";
import { signOut } from "next-auth/react";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const NavEnd = ({ toggleHamburger, session }) => {
	const router = useRouter();

	const handleSignOut = async () => {
		const toastId = toast.loading("Logging out");

		await signOut({ redirect: false });

		toast.remove(toastId);
		toast("Logged out");

		// Refresh the page to update the session
		router.push("/");
		router.refresh("/");
	};

	return (
		<div className="flex flex-col justify-center items-end w-fit">
			<FramerButton
				text={<CiMenuFries />}
				handleClick={toggleHamburger}
				className="md:hidden"
			/>
			<div className="hidden md:flex flex-col justify-around items-center gap-4">
				<FramerButton
					text="Logout"
					className={`text-xs ${redBtn} ${!session && "hidden"}`}
					handleClick={handleSignOut}
				/>
			</div>
		</div>
	);
};

export default NavEnd;
