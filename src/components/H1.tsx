import { cn } from "@/lib/utils";
import React from "react";
import { twMerge } from "tailwind-merge";

type ChildrenProps = {
	children: React.ReactNode;
	className: string;
};

function H1({ children, className }: ChildrenProps) {
	return <h1 className={cn(`text-3xl font-mono`, className)}>{children}</h1>;
}

export default H1;
