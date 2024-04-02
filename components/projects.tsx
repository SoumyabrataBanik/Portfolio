"use client"

import { projectsData } from "@/lib/data";
import Project from "./project-individual";
import SectionHeading from "./section-heading";
import useSetIsActiveInView from "@/hooks/useSetIsActiveInView";

const Projects = () => {
	const { ref } = useSetIsActiveInView();

	return (
		<section
			ref={ref}
			id="projects"
			className="flex flex-col items-center justify-center gap-8 scroll-mt-36">
			<SectionHeading>My Projects</SectionHeading>
			<>
				{projectsData.map((project, id) => (
					<div key={id}>
						<Project {...project} />
					</div>
				))}
			</>
		</section>
	);
};

export default Projects;
