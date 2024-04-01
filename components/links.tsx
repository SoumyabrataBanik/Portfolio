import { LinksProps } from "@/lib/types";
import React from "react";

const Links: React.FC<LinksProps> = ({ children, href }) => {
	return (
		<a
			href={href}
			target="_blank"
			className="border border-slate-200 hover:border-slate-600 bg-white text-slate-900 p-4 flex items-center justify-center gap-2 rounded-full hover:cursor-pointer outline-none focus:scale-105  hover:scale-110 hover:bg-slate-100 active:scale-101 transition-all h-16 w-16 text-2xl sm:text-3xl">
			{children}
		</a>
	);
};

export default Links;
