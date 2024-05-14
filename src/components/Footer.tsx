"use client";

import Link from "next/link";

function Footer() {
	return (
		<main className=" border-t  border-gray-500 py-2 px-3 my-3 flex justify-between opacity-30 text-xs absolute bottom-0 w-full">
			<p>&#169; FlashByte. ALl rights reserved</p>
			<section>
				<Link
					href={"/terms&conditions"}
					className="mr-2 hover:underline hover:cursor-pointer "
				>
					Terms & Conditions
				</Link>
				<Link
					href={"/privacy-policy"}
					className="hover:underline hover:cursor-pointer"
				>
					Privacy Policy
				</Link>
			</section>
		</main>
	);
}

export default Footer;
