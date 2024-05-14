"use client";

import H1 from "@/components/H1";
import SearchForm from "@/components/search-form";
import Link from "next/link";

function page() {
	return (
		<main className=" flex flex-col items-center px-3 pt-6">
			<H1>Find Events around you</H1>

			<h3 className="py-2 text-gray-300">
				Browse more than{" "}
				<i className="underline underline-offset-4 text-yellow-500">
					10,000 events{" "}
				</i>
				worldwide
			</h3>
			<SearchForm />
			<p className="pt-3 font-extralight text-xs">
				<small className="text-white/35 mr-2">Popular:</small>
				<Link href={"/events/austin"} className=" mr-2">
					Austin
				</Link>
				<Link href={"/events/seattle"}>Seattle</Link>
			</p>
		</main>
	);
}

export default page;
