import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

import Navbar from "../navigation/Navbar";

export const NavbarBase = async () => {
	const session = await getServerSession(authOptions);

	return (
		<div className="sticky top-0 left-0 w-full z-50 bg-black">
			<Navbar session={session} />
		</div>
	);
};
