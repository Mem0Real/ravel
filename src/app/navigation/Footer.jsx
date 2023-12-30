import React from "react";
import StartSection from "./footerComponents/FooterStart";
import EndSection from "./footerComponents/FooterEnd";

const Footer = () => {
	return (
		<div className="flex justify-between items-center p-8 border-t border-neutral-700/40 w-[90%] mx-auto">
			<StartSection />
			<EndSection />
		</div>
	);
};

export default Footer;
