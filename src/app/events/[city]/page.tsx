import H1 from "@/components/H1";
import SingleEvent from "@/components/SingleEvent";
import { capitalize } from "@/lib/utils";
import { Suspense } from "react";
import Loading from "./loading";
import { z } from "zod";

type ParamsProps = {
	params: {
		city: string;
	};
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
};

const validatePageNumberSchema = z.coerce.number().int().positive().optional();

async function Page({ params, searchParams }: ParamsProps) {
	const city = params.city;
	const page = searchParams.page ?? 1;

	const validatedPageNumber = validatePageNumberSchema.safeParse(page);

	console.log(validatedPageNumber.success);

	if (!validatedPageNumber.success) {
		throw new Error("Invalid Page Number");
	}
	return (
		<main className=" flex flex-col items-center py-13 px-[1.5rem] min-h-[110vh] overflow-scroll  ">
			<H1 className="pb-6 pt-4">
				Events in {city === "all" ? "All Events" : capitalize(city)}
			</H1>
			<Suspense key={city + validatedPageNumber.data} fallback={<Loading />}>
				<SingleEvent city={city} page={validatedPageNumber.data} />
			</Suspense>
		</main>
	);
}

export default Page;
