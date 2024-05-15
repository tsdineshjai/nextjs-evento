import { EventoEvent } from "@/lib/types";
import React from "react";
import EventCard from "./event-card";

type eventsListProps = {
	events: EventoEvent[];
};

function SingleEvent({ events }: eventsListProps) {
	return (
		<div className="px-[1.5rem] flex flex-wrap gap-6 justify-center h-fit">
			{events.map((event) => (
				<EventCard key={event.id} event={event} />
			))}
		</div>
	);
}

export default SingleEvent;
