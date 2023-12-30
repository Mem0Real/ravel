"use client";

import React from "react";

import Button from "@/app/baseComponents/Button";
import { CiMenuFries } from "react-icons/ci";
import { redBtn } from "@/app/constants";
import FramerButton from "@/app/baseComponents/FramerButton";

const NavEnd = ({ toggleHamburger }) => {
	return (
		<div className="flex flex-col justify-center items-end w-fit">
			<FramerButton
				text={<CiMenuFries />}
				handleClick={toggleHamburger}
				className="md:hidden"
			/>
			<div className="hidden md:flex flex-col justify-around items-center gap-4">
				<Button text="Logout" className={`text-xs ${redBtn}`} />
			</div>
		</div>
	);
};

export default NavEnd;
