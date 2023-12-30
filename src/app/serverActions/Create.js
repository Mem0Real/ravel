import { prisma } from "@/lib/prisma";

export async function Create(tool) {
	"use server";
	try {
		await prisma.tools.create({
			data: tool,
		});
	} catch (error) {
		console.log("Error Occured: ", error);
	}
}
