import Link from "next/link";
import React from "react";

type NavPropTypes = {
	prevsPath: string;
	nextPath: string;
};

const LinkClass = `bg-gray-800 px-3 py-3 rounded-lg hover:bg-gray-900 hover:scale-105 transition text-white/90 text-xs mb-2`;

function PageNavigation({ prevsPath, nextPath }: NavPropTypes) {
	return (
		<section className="flex justify-between w-full gap-3">
			{prevsPath ? (
				<Link href={prevsPath} className={LinkClass}>
					&#8592; Previous
				</Link>
			) : (
				<div />
			)}

			{nextPath && (
				<Link href={nextPath} className={LinkClass}>
					Next &#8594;
				</Link>
			)}
		</section>
	);
}

export default PageNavigation;
