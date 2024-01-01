import { useEffect, useState } from "react";

const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const updateSize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	return isMobile;
};

export default useIsMobile;
