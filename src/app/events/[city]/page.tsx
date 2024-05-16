import H1 from "@/components/H1";
import SingleEvent from "@/components/SingleEvent";
import { capitalize } from "@/lib/utils";
import { Suspense } from "react";
import Loading from "./loading";

type ParamsProps = {
	params: {
		city: string;
	};
};

async function Page({ params }: ParamsProps) {
	const city = params.city;

	return (
		<main className=" flex flex-col items-center py-13 px-[1.5rem] min-h-[110vh] overflow-scroll  ">
			<H1 className="pb-6 pt-4">
				Events in {city === "all" ? "All Events" : capitalize(city)}
			</H1>

			<Suspense fallback={<Loading />}>
				<SingleEvent city={city} />
			</Suspense>
		</main>
	);
}

export default Page;
