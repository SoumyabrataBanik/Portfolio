"use client";

import { useThemeSwitcherContext } from "@/context/useThemeSwitcherContext";
import { Themes } from "@/lib/types";
import { useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
	const { theme, setTheme } = useThemeSwitcherContext();

	const onClickHandler = () => {
		if (theme === "light") {
			setTheme("dark");
			window.localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark");
		} else {
			setTheme("light");
			window.localStorage.setItem("theme", "light");
			document.documentElement.classList.remove("dark");
		}
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem(
			"theme"
		) as Themes | null;

		if (localTheme) {
			setTheme(localTheme);

			if (localTheme === "dark") {
				document.documentElement.classList.add("dark");
			}
		} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
			document.documentElement.classList.add("dark");
		}
	}, []);

	return (
		<button
			className="fixed bottom-14 right-16 border border-white bg-slate-50 bg-opacity-80 backdrop-blur-[0.5rem] hover:scale-125 hover:z-20 hover:border-slate-700 text-lg transition-all hover:bg-slate-200 p-3 rounded-full shadow-xl dark:bg-slate-950"
			onClick={onClickHandler}>
			{theme === "light" && <BsSun />}
			{theme === "dark" && <BsMoon />}
		</button>
	);
};

export default ThemeSwitch;
