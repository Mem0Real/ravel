"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateTool(id, data) {
	console.log(data);

	try {
		await prisma.tools.update({
			where: {
				id: id,
			},
			data: {
				...data,
				updated_at: new Date(),
			},
		});

		setTimeout(() => revalidatePath("/dashboard"), 5000);
		revalidatePath("/");
		revalidatePath("/dashboard");
	} catch (error) {
		console.log("Error: ", error);
	}
}
