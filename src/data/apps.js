import { FiClock, FiCode, FiLayers, FiSmile, FiZap } from "react-icons/fi";

import accordionImage from "../pages/apps/accordion/images/accordion-hero.jpg";
import accordionProImage from "../pages/apps/accordion-pro/images/accordion-hero.jpg";
import analogClockImage from "../pages/apps/analog-clock/images/analog-clock-preview.png";
import avataarGeneratorImage from "../pages/apps/avataarGenerator/images/avataar-generator-preview.png";
import randomAvataarsImage from "../pages/apps/randomAvataars/images/random-avataars-preview.png";
import apiRequestWorkbenchImage from "../pages/apps/apiRequestWorkbench/images/api-request-workbench-preview.png";
import base64ConverterImage from "../pages/apps/base64Converter/images/base64-converter-preview.png";

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
    {
        number: "05",
        level: "CREATIVE",
        title: "Random Avataars",
        description:
            "Generate a fresh DiceBear avatar from 28 styles, then copy or download it in seconds.",
        image: randomAvataarsImage,
        imageAlt: "Random Avataars interface with a generated avatar and style selector",
        icon: FiSmile,
        to: "/apps/random-avataars",
        features: ["28 illustration styles", "Random or selected style", "PNG and SVG export"],
        action: "Try Random Avataars",
    },
    {
        number: "06",
        level: "UTILITY",
        title: "API Request Workbench",
        description:
            "Compose REST requests, inspect live responses, and revisit recent calls in a focused browser workspace.",
        image: apiRequestWorkbenchImage,
        imageAlt: "API Request Workbench with request composer and response viewer",
        icon: FiCode,
        to: "/apps/api-request-workbench",
        features: ["Five HTTP methods", "Response headers and timing", "Local request history"],
        action: "Try API Request Workbench",
    },
    {
        number: "07",
        level: "UTILITY",
        title: "Base64 Converter",
        description:
            "Encode or decode UTF-8 text in your browser with URL-safe output and clear validation feedback.",
        image: base64ConverterImage,
        imageAlt: "Base64 Converter with text input and encoded output panels",
        icon: FiCode,
        to: "/apps/base64-converter",
        features: ["UTF-8 text conversion", "URL-safe output", "Private in-browser processing"],
        action: "Try Base64 Converter",
    },
];

export default apps;
