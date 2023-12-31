"use server";

import { prisma } from "@/lib/prisma";

export async function Update(id, data) {
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
