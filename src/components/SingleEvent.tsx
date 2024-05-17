import { EventoEvent } from "@prisma/client";
import EventCard from "./event-card";
import { capitalize, sleep } from "@/lib/utils";
import prisma from "@/lib/db";
import PageNavigation from "./page-navigation";
import { unstable_cache } from "next/cache";

type eventsListProps = {
	city: string;
	page?: number;
};

let count: number;
async function SingleEvent({ city, page = 1 }: eventsListProps) {
	const eventsGenerateCache = unstable_cache(async () => {
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
		return { events, allEventsCount, count };
	});

	const { events, allEventsCount } = await eventsGenerateCache();

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
