"use client";

import { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

import { signIn } from "next-auth/react";

import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import useIsMobile from "@/hooks/useIsMobile";

const mont = Montserrat({ weight: "400", subsets: ["latin"] });

export default function LoginPage() {
	const [loading, setLoading] = useState(false);
	const [password, showPassword] = useState(false);

	const isMobile = useIsMobile();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const phone = e.target[0].value;
		const password = e.target[1].value;

		const toastId = toast.loading("Authenticating");
		setLoading(true);

		const result = await signIn("credentials", {
			phone,
			password,
			callbackUrl: "/dashboard",
		});

		setLoading(false);
		toast.remove(toastId);
		if (result?.error) {
			toast.error(result.error);
		} else {
			toast.success("Logged in successfully!");
		}
	};

	return (
		<div className="flex min-h-[82vh] relative w-full">
			{!isMobile && (
				<div className="hidden md:flex basis-3/4 border-r border-white bg-black flex-col items-center justify-center">
					<div className=" relative w-[15em] h-96">
						<Image
							fill
							src="/images/loginBg.webp"
							alt="Login"
							className="absolute object-contain object-center brightness-75 contrast-150"
							sizes="(max-width: 768px) 100vw"
							priority
						/>
					</div>
				</div>
			)}
			<div className="w-full lg:basis-1/4 relative">
				<Image
					fill
					src="/images/loginBg.webp"
					alt="Login"
					className="block lg:hidden absolute object-contain object-top opacity-5 z-10 pointer-events-none"
					sizes="(max-width: 768px) 99vw"
				/>
				<form
					className="flex flex-col justify-center items-center gap-4 bg-neutral-950 z-20 h-full w-full pt-12 lg:pt-0"
					onSubmit={handleSubmit}
				>
					<h1
						className={`text-4xl text-neutral-800 dark:text-neutral-200 underline underline-offset-4 ${mont.className}`}
					>
						Login
					</h1>
					<div className="w-full flex flex-col items-center justify-center gap-4 py-12">
						<div className="relative z-0 w-2/3 mb-9 group">
							<input
								type="number"
								name="phone"
								className="block py-2.5 px-0 w-full text-sm text-neutral-800 dark:text-neutral-200 bg-transparent border-0 border-b-2 border-neutral-800 dark:border-neutral-200 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer disabled:border-neutral-800 disabled:dark:border-neutral-200 autofill:bg-transparent"
								placeholder=" "
								autoComplete="phone"
								autoFocus={true}
								disabled={loading}
								aria-label="phone"
							/>

							<label
								htmlFor="phone"
								className="text-base absolute peer-placeholder-shown:text-sm text-text-neutral-700 dark:neutral-300 duration-300 transform -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9"
							>
								Phone Number
							</label>
						</div>
						<div className="relative z-0 w-2/3 mb-6 group">
							<input
								type={password ? "text" : "password"}
								name="password"
								className="block py-2.5 px-0 w-full text-sm text-neutral-800 dark:text-neutral-200 bg-transparent border-0 border-b-2 border-neutral-800 dark:border-neutral-200 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer disabled:border-neutral-800 disabled:dark:border-neutral-200"
								placeholder=" "
								autoComplete="current-password"
								disabled={loading}
								aria-label="password"
							/>
							<button
								type="button"
								className="absolute right-2 top-3"
								onClick={() => showPassword(!password)}
								name="show password"
								aria-label="show password"
							>
								{password ? (
									<AiOutlineEye size={19} />
								) : (
									<AiOutlineEyeInvisible size={19} />
								)}
							</button>

							<label
								htmlFor="password"
								className="peer-focus:text-base absolute text-sm text-neutral-700 dark:text-neutral-300 duration-300 transform -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9"
							>
								Password
							</label>
						</div>

						<div className="mx-auto">
							<motion.button
								key="signIn"
								animate={
									loading
										? { scale: 0.9, outlineColor: "rgb(156 163 175)" }
										: { scale: 1, outlineColor: "#2563eb" }
								}
								whileTap={
									!loading
										? {
												scale: 0.9,
												outlineWidth: "2px",
										  }
										: {
												outlineWidth: "2px",
										  }
								}
								whileHover={
									!loading && {
										borderRadius: "12px",
									}
								}
								className="px-4 py-2 rounded-lg outline outline-1 text-sm"
								type="submit"
								disabled={loading}
							>
								Login
							</motion.button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
