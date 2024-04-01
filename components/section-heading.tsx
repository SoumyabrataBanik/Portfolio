import { ReactNode } from "react";

const SectionHeading = ({ children }: { children: ReactNode }) => {
	return <h2 className="text-xl font-bold capitalize mb-8 text-center">{children}</h2>;
};

export default SectionHeading;
