import PrimeEvent from "@/components/primeEvent";
import prisma from "@/lib/db";
import { EventoEvent } from "@prisma/client";
import { notFound } from "next/navigation";

type PageProps = {
	params: {
		slug: string;
	};
};

async function EventPage({ params }: PageProps) {
	const { slug } = params;

	const eventDetails: EventoEvent | null = await prisma.eventoEvent.findUnique({
		where: {
			slug: slug,
		},
	});
	if (!eventDetails) {
		return notFound();
	}

	return (
		<main>
			<PrimeEvent key={eventDetails.id} data={eventDetails} />
		</main>
	);
}

export default EventPage;
