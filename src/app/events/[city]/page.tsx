"use client";
import H1 from "@/components/H1";
import { usePathname } from "next/navigation";
import React from "react";

function Page() {
	const pathName = usePathname();

	const cityName = pathName.split("/")[2];
	return (
		<main className="border-4 ">
			<H1>Events in {cityName}</H1>
		</main>
	);
}

export default Page;
