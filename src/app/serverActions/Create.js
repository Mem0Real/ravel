"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function Create(tool) {
	try {
		await prisma.tools.create({
			data: tool,
		});

		revalidatePath("/dashboard");
	} catch (error) {
		console.log("Error Occured: ", error);
	}
	revalidatePath("/dashboard");
}
