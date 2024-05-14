"use client";

import Link from "next/link";

function page() {
	return (
		<section className=" px-3 mx-auto flex flex-col items-center -mt-36">
			<h1 className="py-2 text-3xl font-mono">Find Events around you</h1>

			<h3 className="py-2 text-gray-300">
				Browse more than{" "}
				<i className="underline underline-offset-4  text-yellow-500">
					{" "}
					10,000 events
				</i>{" "}
				worldwide
			</h3>

			<input
				type="text"
				name=""
				id=""
				placeholder="Search events in any city..."
				className="placeholder:text-gray-500 p-3 bg-gray-800 border-none outline-none my-2 rounded-md w-full placeholder:text-xs text-xs text-grey-800"
			/>

			<p className="pt-3 font-extralight text-xs">
				{" "}
				<small className="text-white/35 mr-2">Popular:</small>
				<Link href={"/events/austin"} className=" mr-2">Austin</Link>
				<Link href={"/events/seattle"}>Seattle</Link>
			</p>
		</section>
	);
}

export default page;
