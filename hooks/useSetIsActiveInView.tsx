"use client"

import { useActiveSectionContext } from "@/context/active-section-context";
import { type SectionProps } from "@/lib/types";
import { SetStateAction, useEffect } from "react";
import { useInView } from "react-intersection-observer"

const useSetIsActiveInView = () => {
    const {setActiveSection} = useActiveSectionContext();
    const { ref, inView, entry } = useInView({
        threshold: 0.5
    });

    const pageFound = entry?.target.id || "";
	const page = pageFound?.charAt(0).toUpperCase() + pageFound?.substring(1);

    useEffect(() => {
        if (inView) {
            setActiveSection(page as SetStateAction<SectionProps>)
        }
    }, [inView, setActiveSection, page]);

    return { ref };
}

export default useSetIsActiveInView;