import { FiCalendar, FiClipboard, FiClock, FiCode, FiDroplet, FiFilm, FiLayers, FiSmile, FiSun, FiZap } from "react-icons/fi";

import accordionImage from "../pages/apps/accordion/images/accordion-hero.jpg";
import accordionProImage from "../pages/apps/accordion-pro/images/accordion-hero.jpg";
import analogClockImage from "../pages/apps/analog-clock/images/analog-clock-preview.png";
import avataarGeneratorImage from "../pages/apps/avataarGenerator/images/avataar-generator-preview.png";
import randomAvataarsImage from "../pages/apps/randomAvataars/images/random-avataars-preview.png";
import apiRequestWorkbenchImage from "../pages/apps/apiRequestWorkbench/images/api-request-workbench-preview.png";
import base64ConverterImage from "../pages/apps/base64Converter/images/base64-converter-preview.png";
import helloReactImage from "../pages/apps/helloReact/images/hello-react-preview.png";
import basicThemedAppImage from "../pages/apps/basicThemedApp/images/basic-themed-app-preview.png";
import blobGeneratorImage from "../pages/apps/blobGenerator/images/blob-generator-preview.png";
import { carouselSlides } from "../pages/apps/cinematicCarousel/data";
import clipboardSnippetLibraryImage from "../pages/apps/clipboardSnippetLibrary/images/clipboard-snippet-library-preview.png";

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
            "A real-time local clock with smoothly moving hands, locale-aware date and time, and your device time zone.",
        image: analogClockImage,
        imageAlt: "Analog clock with a digital time and date display",
        icon: FiClock,
        to: "/apps/analog-clock",
        features: ["Locale-aware time and date", "Device time zone", "Smooth hand movement"],
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
    {
        number: "08",
        level: "FOUNDATION",
        title: "Hello React",
        description:
            "A friendly React starter screen with a live browser date, time, and time zone.",
        image: helloReactImage,
        imageAlt: "Hello React app with a live local clock and date display",
        icon: FiCalendar,
        to: "/apps/hello-react",
        features: ["Live date and time", "Browser locale and time zone", "Clean React lifecycle"],
        action: "Try Hello React",
    },
    {
        number: "09",
        level: "FOUNDATION",
        title: "Basic Themed App",
        description:
            "A responsive React starter with a persistent light and dark theme, system preference support, and reusable design tokens.",
        image: basicThemedAppImage,
        imageAlt: "Basic Themed App with a theme toggle and responsive feature cards",
        icon: FiSun,
        to: "/apps/basic-themed-app",
        features: ["Light and dark themes", "Saved preference", "System theme fallback"],
        action: "Try Basic Themed App",
    },
    {
        number: "10",
        level: "CREATIVE",
        title: "Blob Generator",
        description:
            "Shape an organic gradient blob with live size and corner controls, then copy the CSS for your interface.",
        image: blobGeneratorImage,
        imageAlt: "Blob Generator with a live gradient shape preview and CSS controls",
        icon: FiDroplet,
        to: "/apps/blob-generator",
        features: ["Live shape preview", "Independent corner radii", "Copy-ready CSS"],
        action: "Try Blob Generator",
    },
    {
        number: "11",
        level: "CREATIVE",
        title: "Cinematic Carousel UI",
        description:
            "Explore a cinematic, responsive carousel with autoplay, keyboard and swipe controls, reduced-motion support, and a developer details modal.",
        image: carouselSlides[0].image,
        imageAlt: "A star-filled mountain landscape from the cinematic carousel",
        icon: FiFilm,
        to: "/apps/cinematic-carousel-ui",
        features: ["Autoplay and pause", "Keyboard and swipe controls", "Reduced-motion support"],
        action: "Try Cinematic Carousel",
    },
    {
        number: "12",
        level: "UTILITY",
        title: "Clipboard Snippet Library",
        description:
            "Save reusable commands, code, and notes in a searchable browser library with categories, pinning, editing, and one-click copy.",
        image: clipboardSnippetLibraryImage,
        imageAlt: "Clipboard Snippet Library with categorized saved text snippets",
        icon: FiClipboard,
        to: "/apps/clipboard-snippet-library",
        features: ["Browser-local snippets", "Search and categories", "Pin and copy"],
        action: "Open Snippet Library",
    },
];

export default apps;
