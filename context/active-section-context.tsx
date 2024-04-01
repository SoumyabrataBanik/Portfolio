"use client";

import { links } from "@/lib/data";
import { ActiveSectionContextType, SectionProps } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [activeSection, setActiveSection] = useState<SectionProps>("Home");

	return (
		<ActiveSectionContext.Provider
			value={{ activeSection, setActiveSection }}>
			{children}
		</ActiveSectionContext.Provider>
	);
};

export default ActiveSectionContextProvider;

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (!context) throw new Error("Component may be outside of provider")

    return context;
}