import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type PrimeEventProps = {
	data: EventoEvent;
};

function PrimeEvent({ data }: PrimeEventProps) {
	const {
		name,
		slug,
		city,
		location,
		date,
		organizerName,
		imageUrl,
		description,
	} = data;

	const dateObject = new Date(date);

	return (
		<main className=" max-w-[800px]  mx-auto flex flex-col items-center justify-center py-2 mt-[1rem]">
			<div className="w-full grid place-items-center md:gap-3 rounded-lg py-3 mb-3  bg-yellow-300 pt-[2rem] bg-gradient-to-r from-green-900 to-purple-900">
				<section className=" flex flex-col md:flex-row  items-center justify-between w-2/3 mb-[2rem]">
					<Image
						src={imageUrl}
						alt={name}
						width={250}
						height={250}
						className="rounded-lg object-cover mb-2 mx-auto"
						sizes="(max-width:1280px) 100vw, 1280px"
					/>
					<section className="ml-5 flex flex-col justify-around">
						<div>
							<p className="text-xs">
								<span className="mr-1 text-white/85">
									{dateObject.toLocaleDateString("en-US", {
										weekday: "long",
									})}
									,
								</span>
								<span className="mr-1 text-white/85">
									{dateObject.toLocaleDateString("en-US", {
										month: "long",
									})}
								</span>
								<span className=" text-white/75">
									{dateObject.toLocaleDateString("en-US", {
										day: "2-digit",
									})}
								</span>
							</p>
							<p className="text-3xl">{name}</p>
							<p className="italic font-light text-yellow-400">
								Organized by {organizerName}
							</p>
						</div>

						<Link
							href={"/"}
							className="text-center w-[280px] h-7px bg-gray-500 text-yellow-500 py-2  rounded-md hover:bg-gray-300 hover:text-black"
						>
							Get Tickets
						</Link>
					</section>
				</section>
			</div>

			{/* second section */}
			<section className="flex flex-col justify-center items-center px-8">
				<h3 className="text-base font-mono">About this Event</h3>

				<p className="font-thin text-sm"> {description}</p>
				<p className="py-2 font-normal text-md">Location</p>
				<p className="text-sm font-extralight text-yellow-500">
					{location}, {city}
				</p>
			</section>
		</main>
	);
}

export default PrimeEvent;
