import H1 from "@/components/H1";
import SingleEvent from "@/components/SingleEvent";
import { EventoEvent } from "@/lib/types";
import React from "react";

type ParamsProps = {
	params: {
		city: string;
	};
};

async function Page({ params }: ParamsProps) {
	const response = await fetch(
		"https://bytegrad.com/course-assets/projects/evento/api/events?city=austin"
	);

	const events: EventoEvent[] = await response.json();

	console.log(events);

	const city = params.city;
	return (
		<main className=" flex flex-col items-center py-13 px-[1.5rem] min-h-[110vh]  ">
			<H1>
				Events in{" "}
				{city === "all"
					? "All Events"
					: city.charAt(0).toUpperCase() + city.slice(1)}
			</H1>

			<SingleEvent events={events} />
		</main>
	);
}

export default Page;
