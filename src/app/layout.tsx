import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/container";

export const metadata: Metadata = {
	title: "Evento App",
	description: "Browse moret than 10000 events worldwide",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body className="bg-gray-700 text-white overflow-y-scroll ">
				<Container>
					<Header />
					{children}
					<Footer />
				</Container>
			</body>
		</html>
	);
}
