"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function Delete(id) {
	try {
		await prisma.tools.delete({
			where: {
				id: id,
			},
		});
		revalidatePath("/dashboard");
	} catch (error) {
		console.log("Error: ", error);
	}
}
