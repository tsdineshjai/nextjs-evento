import PrimeEvent from "@/components/primeEvent";

type PageProps = {
	params: {
		slug: string;
	};
};

async function EventPage({ params }: PageProps) {
	const { slug } = params;

	const response = await fetch(
		`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
	);
	const data = await response.json();

	return (
		<main>
			<PrimeEvent key={data.id} data={data} />
		</main>
	);
}

export default EventPage;
