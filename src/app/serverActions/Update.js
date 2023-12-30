import { prisma } from "@/lib/prisma";

export async function Update(id, data) {
	"use server";
	try {
		await prisma.tools.update({
			where: {
				id: id,
			},
			data: data,
		});
	} catch (error) {
		console.log("Error: ", error);
	}
}
