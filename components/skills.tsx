"use client";

import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import useSetIsActiveInView from "@/hooks/useSetIsActiveInView";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};

const Skills = () => {
	const { ref } = useSetIsActiveInView();
	return (
		<section
			id="skills"
			ref={ref}
			className="max-w-[45rem] scroll-mt-32">
			<SectionHeading>Skills </SectionHeading>
			<ul className="flex gap-8 flex-wrap items-center justify-center">
				{skillsData.map((skill, index) => (
					<motion.li
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						// viewport={{
						// 	once: true,
						// }}
                        custom={index}
						key={index}
						className="flex gap-2 items-center border border-slate-900 px-3 py-2 rounded-lg hover:border-slate-700 hover:scale-105 hover:text-slate-700 dark:bg-slate-700">
						<span>{skill.icon}</span>
						<span>{skill.skill}</span>
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default Skills;
