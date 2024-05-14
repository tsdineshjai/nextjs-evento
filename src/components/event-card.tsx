import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import React from "react";

type EventCardProps = {
	event: EventoEvent;
};

function EventCard({ event }: EventCardProps) {
	const {
		name,
		slug,
		city,
		location,
		date,
		organizerName,
		imageUrl,
		description,
	} = event;
	return (
		<section className="mx-auto max-w-[500px] border-2 flex-1 basis-80 mb-2 border-yellow-300 rounded-lg relative">
			<Image
				src={imageUrl}
				width={500}
				height={200}
				alt={name}
				className="object-fit h-[60%] rounded-lg bg-white w-full"
			/>
			<div className="flex flex-col flex-1 items-center justify-center ">
				<h2 className="text-2xl font-semibold">{name}</h2>
				<p className="italic text-yellow-500/80 ">By {organizerName}</p>
				<p className="text-xs text-white/30 mt-2">{location}</p>
			</div>

			<div className="flex flex-col justify-center items-center absolute top-[7px] left-[15px] h-[45px] w-[45px] bg-black/30 rounded-md">
				<p className="p-0 text-base text-white/75 -m-1">
					{new Date(date).toLocaleDateString("en-US", {
						day: "2-digit",
					})}
				</p>
				<p className="p-0 text-xs text-yellow-500">
					{new Date(date).toLocaleDateString("en-US", {
						month: "short",
					})}
				</p>
			</div>
		</section>
	);
}

export default EventCard;
