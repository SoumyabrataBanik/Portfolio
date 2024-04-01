"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {

	const {activeSection, setActiveSection} = useActiveSectionContext();
	
	return (
		<header className="z-[999] relative">
			<motion.div
				className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.5rem] sm:w-[36rem] sm:rounded-full -translate-x-1/2 dark:bg-slate-950 dark:border-black/40 dark:bg-opacity-75"
				initial={{ y: -100, x: "-50%", opacity: 0 }}
				animate={{ y: 0, x: "-50%", opacity: 1 }}></motion.div>

			<nav className="flex fixed w-full sm:w-[initial] top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
				<ul className="flex w-full flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-slate-500 sm:w-[initial] sm:flex-nowrap sm:gap-[1rem]">
					{links.map((link) => (
						<motion.li
							className="h-3/4 flex items-center justify-center relative dark:text-slate-400 dark:hover:text-slate-300"
							key={link.hash}
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}>
							<Link
								className={clsx(
									"flex w-full items-center justify-center px-3 py-3 hover:text-slate-950 transition0",
									{
										"text-slate-950":
											activeSection === link.name,
									}
								)}
								onClick={() => setActiveSection(link.name)}
								href={link.hash}>
								{link.name}

								{link.name === activeSection && (
									<motion.span layoutId="activeSection"
									transition={{
										type: "spring",
										stiffness: 380,
										damping: 30,
									}} className="bg-slate-300 rounded-full absolute inset-0 -z-10 dark:bg-slate-100"></motion.span>
								)}
							</Link>
						</motion.li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
