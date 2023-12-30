import React from "react";
import Landing from "../components/dashComponents/Landing";
import Operations from "../components/dashComponents/Operations";

const DashboardPage = () => {
	return (
		<div className="min-h-screen flex flex-col justify-start items-center w-full">
			<Landing />
			<Operations />
		</div>
	);
};

export default DashboardPage;
