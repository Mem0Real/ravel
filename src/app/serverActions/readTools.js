"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function readTools() {
	const data = await prisma.tools.findMany({
		orderBy: { updated_at: "desc" },
	});

	revalidatePath("/dashboard");

	return data;
}
