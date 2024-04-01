"use client";

import Image from "next/image";
import profileImage from "@/public/Profile Image.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";
import {
	BsArrowDown,
	BsArrowRight,
	BsGithub,
	BsLinkedin,
} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import useSetIsActiveInView from "@/hooks/useSetIsActiveInView";
import React from "react";
import Links from "./links";
import { SiGmail } from "react-icons/si";
import { useActiveSectionContext } from "@/context/active-section-context";

const Intro = () => {
	const { ref } = useSetIsActiveInView();
	const { setActiveSection } = useActiveSectionContext()
	return (
		<section
			ref={ref}
			id="home"
			className="scroll-mt-96 mt-[4.5rem] sm:mt-[7rem]">
			<div className="flex items-center justify-center">
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						type: "tween",
						duration: 0.2,
					}}>
					<Image
						src={profileImage}
						alt="Profile Picture"
						width="200"
						height="200"
						quality="100"
						priority={true}
						className="h-[12rem] w-[12rem] rounded-full border-[0.35rem] border-white object-cover shadow-xl"
					/>
				</motion.div>
			</div>
			<motion.h1
				className="text-center mt-10 text-xl sm:text-2xl !leading-[2] max-w-[45rem]"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}>
				<span className="font-semibold">Hello there</span>.<br /> I am{" "}
				<span className="font-bold">Soumyabrata Banik</span>. I am a
				college student and an aspiring{" "}
				<span className="font-bold">front-end developer</span>. I like
				building sites and apps. My focus is{" "}
				<span className="underline">React (Next.js)</span>
				{" "}and <span className="underline">Tailwind CSS</span>
			</motion.h1>

			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10 text-base sm:text-lg"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}>
				<Link
					onClick={() => setActiveSection("Contact")}
					href="#contact"
					className="bg-slate-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105 transition-all group">
					Contact me here{" "}
					<BsArrowDown className="opacity-70 group-hover:translate-x-1" />
				</Link>
				<Link href="CV.pdf" className="border border-slate-300 bg-slate-100 text-slate-950 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-200 active:scale-105 transition-all group">
					Download CV
					<HiDownload className="opacity-70 group-hover:translate-y-1 transition-all" />
				</Link>
				<div className="flex gap-4">
					<Links href="https://www.linkedin.com/in/soumyabrata-banik-023234270/">
						<BsLinkedin />
					</Links>
					<Links
						href="https://github.com/SoumyabrataBanik"
						>
						<BsGithub />
					</Links>
					<Links href="mailto:soumyabratabanik46@gmail.com">
						<SiGmail />
					</Links>
				</div>
			</motion.div>
		</section>
	);
};

export default Intro;
