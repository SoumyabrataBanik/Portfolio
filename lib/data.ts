import React from "react";
import { IoBookSharp, IoLogoJavascript } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";
import { PiBooksFill } from "react-icons/pi";

import wildOasis from "@/public/The Wild Oasis.png";
import yourFoodies from "@/public/YourFoodies.png";
import { SiCplusplus, SiTailwindcss, SiTypescript } from "react-icons/si";
import {
	FaBootstrap,
	FaCss3,
	FaGitAlt,
	FaHtml5,
	FaReact,
} from "react-icons/fa";
import { TbBrandFramerMotion, TbBrandNextjs, TbBrandRedux, TbBrandVite } from "react-icons/tb";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Education",
		hash: "#education",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "B.Tech in Electronics and Communication Technology",
		location:
			"B.P. Poddar Institute of Management and Technology, Kolkata, West Bengal",
		description: "I am going to graduate in 2025 from this course.",
		icon: React.createElement(LuGraduationCap),
		date: "2021 - present",
	},
	{
		title: "High Secondary",
		location: "Delhi Public School, Burdwan, West Bengal",
		description:
			"I studied here for two years and passed with a percentage of 84.6%.",
		icon: React.createElement(PiBooksFill),
		date: "2019 - 2021",
	},
	{
		title: "Matriculation",
		location: "S.B.O.A. Public School, Guwahati, Assam",
		description:
			"I studied here for ten years and passed with a percentage of 94.6%.",
		icon: React.createElement(IoBookSharp),
		date: "2009-2019",
	},
] as const;

export const projectsData = [
	{
		title: "Wild Oasis - A Guest House Management App",
		description:
			"I worked on this project as I was learning React. My first major personal project that took me three months to complete",
		tags: ["React", "HTML", "CSS", "Styled-components", "Supabase"],
		imageUrl: wildOasis,
		link: "https://github.com/SoumyabrataBanik/Wild-Oasis",
	},
	{
		title: "YourFoodies - A Community for Food Lovers",
		description:
			"I worked on this project while I was first learning about NextJS. My first NextJS project that took me two months to complete",
		tags: ["React", "TypeScript", "Next.js", "CSS", "HTML"],
		imageUrl: yourFoodies,
		link: "https://github.com/SoumyabrataBanik/YourFoodies",
	},
] as const;

export const skillsData = [
	{
		skill: "C/C++",
		icon: React.createElement(SiCplusplus),
	},
	{
		skill: "HTML",
		icon: React.createElement(FaHtml5),
	},
	{
		skill: "CSS",
		icon: React.createElement(FaCss3),
	},
	{
		skill: "JavaScript",
		icon: React.createElement(IoLogoJavascript),
	},
	{
		skill: "TypeScript",
		icon: React.createElement(SiTypescript),
	},
	{
		skill: "React",
		icon: React.createElement(FaReact),
	},
	{
		skill: "Next.js",
		icon: React.createElement(TbBrandNextjs),
	},
	{
		skill: "Bootstrap",
		icon: React.createElement(FaBootstrap),
	},
	{
		skill: "Git",
		icon: React.createElement(FaGitAlt),
	},
	{
		skill: "Tailwind",
		icon: React.createElement(SiTailwindcss),
	},
	{
		skill: "Vite",
		icon: React.createElement(TbBrandVite),
	},
	{
		skill: "Redux",
		icon: React.createElement(TbBrandRedux),
	},
	{
		skill: "Framer Motion",
		icon: React.createElement(TbBrandFramerMotion)
	},
] as const;
