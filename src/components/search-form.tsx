"use client";

import { useRouter } from "next/navigation";
import React from "react";

function SearchForm() {
	const [search, setSearch] = React.useState("");
	const router = useRouter();

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (!search) return;
		router.push(`/events/${search}`);
	}
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name=""
				id=""
				placeholder="Search events in any city..."
				className="w-full h-11 rounded-lg bg-white/[7%] px-6 outline-none text-base ring-accent/50 transition focus:ring-2 focus:bg-white/10"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</form>
	);
}

export default SearchForm;
