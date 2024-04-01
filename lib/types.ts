import React from "react";
import { links } from "./data";

export type SectionProps = (typeof links)[number]["name"] | null;

export interface ActiveSectionContextType {
	activeSection: SectionProps;
	setActiveSection: React.Dispatch<React.SetStateAction<SectionProps>>;
}

export interface LinksProps {
	children: React.ReactNode;
	href: string;
}

export declare type ContactFormEmailProps = {
	message: string;
	senderEmail: string;
};

export declare type Themes = "light" | "dark";

export declare type UseThemeSwitcherContextProps = {
	theme: Themes;
	setTheme: React.Dispatch<React.SetStateAction<Themes>>;
};
