"use client"

import { motion } from "framer-motion";

const SectionDivider = () => {
	return (
		<motion.div
			className="bg-gray-200 my-24 h-10 sm:h-16 w-1 rounded-full"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}></motion.div>
	);
};

export default SectionDivider;