import { FiLayers, FiZap } from "react-icons/fi";

import accordionImage from "../pages/apps/accordion/images/accordion-hero.jpg";
import accordionProImage from "../pages/apps/accordion-pro/images/accordion-hero.jpg";

const apps = [
    {
        number: "01",
        level: "FOUNDATION",
        title: "Accordion",
        description:
            "A focused FAQ pattern with clear, single-panel expansion and smooth transitions.",
        image: accordionImage,
        imageAlt: "Sculptural architecture seen through a bright glass canopy",
        icon: FiLayers,
        to: "/apps/accordion",
        features: ["Single open panel", "Keyboard ready", "Smooth motion"],
        action: "Try Accordion",
    },
    {
        number: "02",
        level: "ADVANCED",
        title: "Accordion Pro",
        description:
            "A flexible accordion with saved preferences, multiple opening modes, and quick controls.",
        image: accordionProImage,
        imageAlt: "Snow-covered mountain peaks beneath a clear blue sky",
        icon: FiZap,
        to: "/apps/accordion-pro",
        features: ["Saved state", "Single or multiple", "Panel controls"],
        action: "Try Accordion Pro",
    },
];

export default apps;
