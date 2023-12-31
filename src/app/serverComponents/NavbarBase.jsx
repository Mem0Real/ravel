import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

import Navbar from "../navigation/Navbar";

export const NavbarBase = async () => {
    const session = await getServerSession(authOptions);

    return <Navbar session={session} />;
}