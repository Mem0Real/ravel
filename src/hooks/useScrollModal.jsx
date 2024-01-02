import React, { useEffect } from "react";

// Disable scrollbar on modal open
const useScrollModal = (ref, modal) => {
	useEffect(() => {
		// Disable all scroll for now
		const handleWindowWheel = (event) => {
			// if (modal && !ref?.current.contains(event.target)) {
			if (modal) {
				event.preventDefault();
			}
		};

		const handleTouchMove = (event) => {
			if (modal) {
				event.preventDefault();
			}
		};

		window.addEventListener("wheel", handleWindowWheel, { passive: false });
		window.addEventListener("touchmove", handleTouchMove, { passive: false });

		return () => {
			window.removeEventListener("wheel", handleWindowWheel);
			window.removeEventListener("touchmove", handleTouchMove);
		};
	}, [ref, modal]);
};

export default useScrollModal;
