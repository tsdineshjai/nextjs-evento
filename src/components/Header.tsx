import Link from "next/link";
import React from "react";

function Header() {
	return (
		<header className="flex justify-between px-10 py-2 mb-3 border-b border-gray-500 ">
			<p className="">Evento</p>
			<section className="flex gap-5 ">
				<Link
					href={"/"}
					className="hover:underline underline-offset-[12px]  decoration-4 decoration-yellow-500"
				>
					Home
				</Link>
				<Link
					href={"/events/all"}
					className="hover:underline underline-offset-[12px] decoration-4 decoration-yellow-500 "
				>
					All events
				</Link>
			</section>
		</header>
	);
}

export default Header;
