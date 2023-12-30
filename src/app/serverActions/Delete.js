import { prisma } from "@/lib/prisma";

export async function Delete(id) {
	"use server";
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
