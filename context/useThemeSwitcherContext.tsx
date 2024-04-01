"use client"

import { UseThemeSwitcherContextProps, type Themes } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

const ThemeSwitcherContext = createContext<UseThemeSwitcherContextProps | null>(
	null
);

const ThemeSwitcherProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<Themes>("light");

	return (
		<ThemeSwitcherContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeSwitcherContext.Provider>
	);
};

export const useThemeSwitcherContext = () => {
    const context = useContext(ThemeSwitcherContext);

    if (!context) {
        throw new Error("Make sure that component is withing Provider")
    }

    return context;
}

export default ThemeSwitcherProvider;