import { EventoEvent } from "@prisma/client";
import EventCard from "./event-card";
import { capitalize, sleep } from "@/lib/utils";
import prisma from "@/lib/db";
import PageNavigation from "./page-navigation";

type eventsListProps = {
	city: string;
	page: number;
};

let count;
async function SingleEvent({ city, page }: eventsListProps) {
	const events: EventoEvent[] = await prisma.eventoEvent.findMany({
		where: {
			city: city === "all" ? undefined : capitalize(city),
		},
		orderBy: {
			date: "asc",
		},
		take: 6,
		skip: (page - 1) * 6,
	});

	const allEventsCount: EventoEvent[] = await prisma.eventoEvent.findMany();
	if (city === "all") {
		count = allEventsCount.length;
	} else {
		count = events.length;
	}

	const prevsPath = page === 1 ? "" : `/events/${city}?page=${page - 1}`;
	const nextPath = count > page * 6 ? `/events/${city}?page=${page + 1}` : "";

	return (
		<div className="px-[1.5rem] flex flex-wrap gap-6 justify-center h-fit ">
			{events.map((event) => (
				<EventCard key={event.id} event={event} />
			))}
			<PageNavigation prevsPath={prevsPath} nextPath={nextPath} />
		</div>
	);
}

export default SingleEvent;
