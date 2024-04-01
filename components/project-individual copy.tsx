"use client"

import Image, { StaticImageData } from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ProjectProps {
	title: string;
	description: string;
	tags: readonly string[];
	link: string;
	imageUrl: StaticImageData;
}

const Project = ({
	title,
	description,
	tags,
	imageUrl,
	link,
}: ProjectProps) => {

    const ref = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
        smooth: 1,
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.section ref={ref} style={{scale: scaleProgress, opacity:opacityProgress}} className="group bg-slate-100 max-w-[50rem] border border-black/5 overflow-hidden sm:pr-8 relative rounded-2xl hover:border hover:border-slate-500 hover:bg-slate-200 transition-all sm:h-[25rem]">
			<div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
				<h3 className="text-xl font-semibold">{title}</h3>
				<p className="mt-2 leading-relaxed text-slate-700">
					{description}
				</p>
				<ul className="flex flex-wrap gap-4 mt-auto list-none">
					{tags.map((tag, index) => (
						<li
							className="bg-slate-800 text-slate-50 py-1 tracking-wider px-3 rounded-full"
							key={index}>
							{tag}
						</li>
					))}
				</ul>
				<a
					href={link}
					target="_blank"
					className="mt-auto flex items-center gap-2 bg-blue-600 w-[8rem] px-3 py-2 rounded-xl text-blue-50">
					See More <BsArrowRight />
				</a>
			</div>
			<Image
				src={imageUrl}
				alt={title}
				className="absolute top-8 h-full -right-40 rounded-t-xl w-[35rem] shadow-2xl group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-3 transition-all group-hover:scale-[1.05]"
			/>
		</motion.section>
	);
};

export default Project;
