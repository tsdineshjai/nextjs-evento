import H1 from "@/components/H1";
import SingleEvent from "@/components/SingleEvent";
import { EventoEvent } from "@/lib/types";
import { capitalize } from "@/lib/utils";
import React from "react";

type ParamsProps = {
	params: {
		city: string;
	};
};

async function Page({ params }: ParamsProps) {
	const city = params.city;
	const response = await fetch(
		`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
	);

	const events: EventoEvent[] = await response.json();
	return (
		<main className=" flex flex-col items-center py-13 px-[1.5rem] min-h-[110vh]  ">
			<H1 className="pb-6 pt-4">
				Events in {city === "all" ? "All Events" : capitalize(city)}
			</H1>

			<SingleEvent events={events} />
		</main>
	);
}

export default Page;
