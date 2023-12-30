import React from "react";
import Link from "next/link";
import Button from "@/app/components/baseComponents/Button";

const NavMid = () => {
	return (
		<ul className="hidden md:flex gap-12 justify-center items-center list-none ">
			<li>
				<Link href="/">
					<Button
						text="Home"
						className="border-none hover:underline underline-offset-8"
					/>
				</Link>
			</li>
			<li>
				<Link href="/dashboard">
					<Button
						text="Dashboard"
						className="border-none hover:underline underline-offset-8"
					/>
				</Link>
			</li>
		</ul>
	);
};

export default NavMid;
