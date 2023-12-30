"use server";
import { prisma } from "@/lib/prisma";

export async function Read() {
	const data = await prisma.tools.findMany();

	return data;
}
