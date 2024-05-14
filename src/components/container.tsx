type ContainerProps = {
	children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
	return (
		<div className="flex flex-col justify-between max-w-7xl min-h-screen mx-auto bg-white/[2%]">
			{children}
		</div>
	);
}
