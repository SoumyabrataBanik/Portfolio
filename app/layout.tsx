import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";
import ThemeSwitcherProvider from "@/context/useThemeSwitcherContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Soumyabrata Banik | Personal Portfolio",
	description: "Soumyabrata Banik is an aspiring full-stack developer.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className="!scroll-smooth">
			<body
				className={`${inter.className} bg-slate-50 text-slate-950 pt-28 sm:pt-36 dark:bg-slate-900 dark:text-gray-50 dark:text-opacity-90`}>
				<div className="bg-[#e0f0c5] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
				<div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
				<ThemeSwitcherProvider>
					<ActiveSectionContextProvider>
						<Header />
						{children}
						<Toaster />
					</ActiveSectionContextProvider>
					<ThemeSwitch />
				</ThemeSwitcherProvider>
			</body>
		</html>
	);
}
