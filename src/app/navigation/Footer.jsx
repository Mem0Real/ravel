import React from "react";
import StartSection from "./footerComponents/FooterStart";
import EndSection from "./footerComponents/FooterEnd";

const Footer = () => {
	return (
		<div className="flex flex-col md:flex-row justify-between items-center py-4 border-t border-neutral-700/40 w-full px-6 z-50 bg-black">
			<StartSection />
			<EndSection />
		</div>
	);
};

export default Footer;
