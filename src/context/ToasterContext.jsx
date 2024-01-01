"use client";

import React, { useState, useEffect } from "react";
import { Raleway } from "next/font/google";

import { toast, ToastBar, Toaster, resolveValue } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";

const raleway = Raleway({ subsets: ["latin"] });

const ToasterContext = () => {
	let theme = {
		background: "#111",
		color: "#ccc",
		paddingHorizontal: 12,
		paddingVertical: 8,
	};

	const variants = {
		show: {
			y: "5px",
		},
		hide: {
			y: "-5em",
		},
	};
	return (
		<Toaster
			containerStyle={{
				top: "56px",
				left: 0,
				zIndex: 40,
				position: "fixed",
			}}
			toastOptions={{
				blank: {
					style: theme,
					duration: 2000,
				},
				loading: {
					style: theme,
				},
				success: {
					style: theme,
					duration: 3000,
				},
				error: {
					style: theme,
					duration: 8000,
				},
			}}
		>
			{(t) => (
				<AnimatePresence>
					<motion.div
						key="toaster"
						animate={t.visible ? "show" : "hide"}
						variants={variants}
						exit={"hide"}
						initial={"hide"}
						transition={{ duration: 0.5 }}
						className={`subpixel-antialiased text-sm ${raleway.className}`}
					>
						<ToastBar toast={t}>
							{({ icon, message }) => (
								<>
									{icon}
									{message}
									{t.type !== "loading" && t.type !== "blank" && (
										<motion.button
											whileTap={{ scale: 0.7 }}
											whileHover={{ scale: 1.2 }}
											onClick={() => toast.dismiss(t.id)}
										>
											{<MdOutlineClose size={16} color="white" />}
										</motion.button>
									)}
								</>
							)}
						</ToastBar>
					</motion.div>
				</AnimatePresence>
			)}
		</Toaster>
	);
};

export default ToasterContext;
