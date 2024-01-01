import React, { useEffect } from "react";

const useOutsideClick = (ref, handleClose) => {
	// Close Modal if clicked outside
	useEffect(() => {
		const checkIfClickedOutside = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				handleClose();
			}
		};
		document.addEventListener("click", checkIfClickedOutside);
		return () => {
			document.removeEventListener("click", checkIfClickedOutside);
		};
	}, [ref, handleClose]);

	return <div>useOutsideClick</div>;
};

export default useOutsideClick;
