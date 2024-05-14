import React from "react";

type ChildrenProps = {
	children: React.ReactNode;
};

function H1({ children }: ChildrenProps) {
	return <h1 className="py-4 text-3xl font-mono">{children}</h1>;
}

export default H1;
