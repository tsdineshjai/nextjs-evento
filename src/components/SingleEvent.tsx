import { EventoEvent } from "@prisma/client";
import EventCard from "./event-card";
import { capitalize, sleep } from "@/lib/utils";
import prisma from "@/lib/db";

type eventsListProps = {
	city: string;
};

async function SingleEvent({ city: cityName }: eventsListProps) {
	const events: EventoEvent[] = await prisma.eventoEvent.findMany({
		where: {
			city: cityName === "all" ? undefined : capitalize(cityName),
		},
		orderBy: {
			date: "asc",
		},
	});
	return (
		<div className="px-[1.5rem] flex flex-wrap gap-6 justify-center h-fit ">
			{events.map((event) => (
				<EventCard key={event.id} event={event} />
			))}
		</div>
	);
}

export default SingleEvent;
