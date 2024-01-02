"use client";

import React, { useState } from "react";

import { CiMenuFries } from "react-icons/ci";
import { redBtn } from "@/app/constants";
import FramerButton from "@/app/components/baseComponents/FramerButton";

import { deleteCookie } from "cookies-next";
import { signOut } from "next-auth/react";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const NavEnd = ({ toggleHamburger, session }) => {
	const [loading, setLoading] = useState(false);

	const router = useRouter();

	const handleSignOut = async () => {
		setLoading(true);
		const toastId = toast.loading("Logging out");

		await signOut({ callbackUrl: "/" });

		setLoading(false);

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
				name="hamburger"
				ariaLabel="hamburger menu"
			/>
			<div className="hidden md:flex flex-col justify-around items-center gap-4">
				<FramerButton
					text="Logout"
					className={`text-xs ${redBtn} ${!session && "invisible"}`}
					handleClick={handleSignOut}
					loading={loading}
				/>
			</div>
		</div>
	);
};

export default NavEnd;
