"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Header() {
	const pathName = usePathname();
	console.log(pathName);
	return (
		<header className="flex justify-between px-10 py-2 mb-3 border-b border-gray-500 ">
			<p className="">Evento</p>
			<section className="flex gap-5 ">
				<Link
					href={"/"}
					className={clsx(
						"hover:underline underline-offset-[12px]  decoration-4 decoration-yellow-500",
						{
							"text-white": pathName === "/",
							"text-white/50": pathName !== "/",
						}
					)}
				>
					Home
				</Link>
				<Link
					href={"/events/all"}
					className={clsx(
						"hover:underline underline-offset-[12px] decoration-4 decoration-yellow-500 ",
						{
							"text-white": pathName === "/events/all",
							"text-white/50": pathName !== "/events/all",
						}
					)}
				>
					All events
				</Link>
			</section>
		</header>
	);
}

export default Header;

/* 

		className={clsx(
						"hover:underline underline-offset-[12px] decoration-4 decoration-yellow-500 ",
					), {
             "text-white" : pathName === "/events/all",
						 "text-white/50" : pathName !== "/events/all"
					}}

						className={` ${
						pathName === "/" ? "text-white" : "text-white/50"
					} `}
*/
