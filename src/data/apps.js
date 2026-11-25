import { FiClock, FiLayers, FiSmile, FiZap } from "react-icons/fi";

import accordionImage from "../pages/apps/accordion/images/accordion-hero.jpg";
import accordionProImage from "../pages/apps/accordion-pro/images/accordion-hero.jpg";
import analogClockImage from "../pages/apps/analog-clock/images/analog-clock-preview.png";
import avataarGeneratorImage from "../pages/apps/avataarGenerator/images/avataar-generator-preview.png";

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
    {
        number: "03",
        level: "UTILITY",
        title: "Analog Clock",
        description:
            "A real-time local clock with smoothly moving hands, digital time, and date.",
        image: analogClockImage,
        imageAlt: "Analog clock with a digital time and date display",
        icon: FiClock,
        to: "/apps/analog-clock",
        features: ["Live local time", "Smooth hand movement", "Responsive dial"],
        action: "Try Analog Clock",
    },
    {
        number: "04",
        level: "CREATIVE",
        title: "Avataar Generator",
        description:
            "Create a distinctive avatar from 31 DiceBear styles, fine-tune its look, and export it in seconds.",
        image: avataarGeneratorImage,
        imageAlt: "Avataar Generator studio preview showing avatar styles and controls",
        icon: FiSmile,
        to: "/apps/avataar-generator",
        features: ["31 avatar styles", "Saved favorites", "PNG and SVG export"],
        action: "Try Avataar Generator",
    },
];

export default apps;
