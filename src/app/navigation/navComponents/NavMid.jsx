"use client";

import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import { usePathname } from "next/navigation";

const NavMid = () => {
	const path = usePathname();

	const links = [
		{ href: "/", label: "Home" },
		{ href: "/dashboard", label: "Dashboard" },
	];

	return (
		<ul className="hidden md:flex gap-12 justify-center items-center list-none ">
			{links.map(({ href, label }) => (
				<Link key={label} href={href} className="relative group">
					{/* Add dynamic text to regex to search for link in path */}
					{path === href && (
						<motion.span
							layoutId="active-underline"
							className="absolute left-0 top-full block h-[2px] w-full bg-neutral-800 dark:bg-neutral-200 mt-0.5"
						/>
					)}
					<span
						key={href}
						className="text-sm text-neutral-700 p-1 dark:text-neutral-300 rounded-md backdrop-blur-md transition-all duration-200 ease-in-out hover:text-neutral-900 dark:hover:text-neutral-100 "
					>
						{label}
					</span>
				</Link>
			))}
		</ul>
	);
};

export default NavMid;
