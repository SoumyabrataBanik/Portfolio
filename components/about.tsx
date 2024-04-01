"use client";

import useSetIsActiveInView from "@/hooks/useSetIsActiveInView";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const AboutMe = () => {
	const { ref } = useSetIsActiveInView();

	return (
		<motion.section
			ref={ref}
			id="about"
			className="text-center mb-10 max-w-[45rem] leading-8 scroll-mt-36 sm:mb-28"
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, delay: 0.215 }}>
			<SectionHeading>About Me</SectionHeading>
			<p>
				I remember when my father brought home a computer for work, I
				instantly fell in love with it. I was curious about it and tried
				to find a way to use it. Back then, my father would allow me to
				use the computer to play some games but most of the time I was
				on the MS Word or MS Excel doing something.
			</p>
			<p className="m-4 sm:m-6">
				And then I got access to the Internet and it opened a whole new
				world to me. I was instantly fascinated by the websites and
				wanted to be a part of the community that built it.
			</p>
			<p className="">
				And so, nearly a decade later, I finally managed to build some
				good looking websites with the latest technologies in the
				market. And it gives me immense pleasure to put forward all of
				my hard work in this website.
			</p>
		</motion.section>
	);
};

export default AboutMe;
