"use server";
import { prisma } from "@/lib/prisma";

export async function removeTool(id) {
	try {
		await prisma.tools.delete({
			where: {
				id: id,
			},
		});
	} catch (error) {
		console.log("Error: ", error);
	}
}
