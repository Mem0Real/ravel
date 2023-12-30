"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function Create(tool) {
	try {
		const res = await prisma.tools.create({
			data: tool,
		});

		if (res) {
			revalidatePath("/dashboard", "page");
		}
	} catch (error) {
		console.log("Error Occured: ", error);
	}
}
