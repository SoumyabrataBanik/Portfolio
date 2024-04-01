"use client";

import { experiencesData } from "@/lib/data";
import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./section-heading";
import styles from "./education.module.css";
import useSetIsActiveInView from "@/hooks/useSetIsActiveInView";
import { useThemeSwitcherContext } from "@/context/useThemeSwitcherContext";

const Education = () => {
	const { ref } = useSetIsActiveInView();
	const { theme } = useThemeSwitcherContext();
	return (
		<section
			className="scroll-mt-36"
			ref={ref}
			id="education">
			<SectionHeading>Education</SectionHeading>
			<VerticalTimeline lineColor="">
				{experiencesData.map((experience, index) => (
					<React.Fragment key={index}>
						<VerticalTimelineElement
							className="vertical-timeline-element--education"
							visible={true}
							contentStyle={{
								border: "1px solid rgba(0, 0, 0, 0.5",
								borderRadius: "1rem",
								color: theme === "dark" ? "black" : "",
								background: "#f3f4f6",
								boxShadow: "none",
								textAlign: "left",
								padding: "1.3rem 2rem",
								margin: "0 -2rem",
							}}
							contentArrowStyle={{
								borderRight: "0.4rem solid  #9ca3af",
							}}
							icon={experience.icon}
							date={experience.date}
							dateClassName={theme === "dark" ? styles.dateDark : styles.dateLight}
							iconStyle={{
								background: "white",
								fontSize: "1.5rem",
								color: "black"
							}}>
							<h3 className={styles.heading}>
								{experience.title}
							</h3>
							<p>{experience.location}</p>
							<p>{experience.description}</p>
						</VerticalTimelineElement>
					</React.Fragment>
				))}
			</VerticalTimeline>
		</section>
	);
};

export default Education;
