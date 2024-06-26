"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Header() {
	const pathName = usePathname();
	return (
		<header className="flex items-center justify-between border-b border-white/10 h-14 px-3 sm:px-9 ">
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
