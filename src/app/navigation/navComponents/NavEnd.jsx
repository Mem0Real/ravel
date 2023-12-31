"use client";

import React from "react";

import { CiMenuFries } from "react-icons/ci";
import { redBtn } from "@/app/constants";
import FramerButton from "@/app/components/baseComponents/FramerButton";

import { deleteCookie } from "cookies-next";
import { signOut } from "next-auth/react";

import { useRouter } from "next/navigation";

const NavEnd = ({ toggleHamburger, session }) => {
	
	console.log("Session: ", session)
	const router = useRouter();
	
	const handleSignOut = async () => {
		await signOut({ redirect: false });

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
				{session && <FramerButton text="Logout" className={`text-xs ${redBtn} `} handleClick={handleSignOut} />}
			</div>
		</div>
	);
};

export default NavEnd;
