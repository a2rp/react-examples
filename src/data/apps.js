import { FiBookOpen, FiCalendar, FiChevronDown, FiClipboard, FiClock, FiCode, FiDroplet, FiEye, FiFilm, FiHardDrive, FiImage, FiLayers, FiMessageSquare, FiPercent, FiRefreshCw, FiSmile, FiSun, FiZap } from "react-icons/fi";

import accordionImage from "../pages/apps/accordion/images/accordion-hero.jpg";
import accordionProImage from "../pages/apps/accordion-pro/images/accordion-hero.jpg";
import analogClockImage from "../pages/apps/analog-clock/images/analog-clock-preview.png";
import digitalClockImage from "../pages/apps/digitalClock/images/digital-clock-preview.png";
import avataarGeneratorImage from "../pages/apps/avataarGenerator/images/avataar-generator-preview.png";
import randomAvataarsImage from "../pages/apps/randomAvataars/images/random-avataars-preview.png";
import apiRequestWorkbenchImage from "../pages/apps/apiRequestWorkbench/images/api-request-workbench-preview.png";
import base64ConverterImage from "../pages/apps/base64Converter/images/base64-converter-preview.png";
import helloReactImage from "../pages/apps/helloReact/images/hello-react-preview.png";
import basicThemedAppImage from "../pages/apps/basicThemedApp/images/basic-themed-app-preview.png";
import lightDarkThemeToggleImage from "../pages/apps/lightDarkThemeToggle/images/screenshot.png";
import blobGeneratorImage from "../pages/apps/blobGenerator/images/blob-generator-preview.png";
import { carouselSlides } from "../pages/apps/cinematicCarousel/data";
import clipboardSnippetLibraryImage from "../pages/apps/clipboardSnippetLibrary/images/clipboard-snippet-library-preview.png";
import codeDiffViewerImage from "../pages/apps/codeDiffViewer/images/code-diff-viewer-preview.png";
import colorContrastCheckerImage from "../pages/apps/colorContrastChecker/images/color-contrast-checker-preview.png";
import colorGradientExplorerImage from "../pages/apps/colorGradientExplorer/images/color-gradient-explorer-preview.png";
import colorPaletteStudioImage from "../pages/apps/colorPaletteStudio/images/color-palette-studio-preview.png";
import colorPickerImage from "../pages/apps/colorPicker/images/color-picker-preview.png";
import cronExpressionBuilderImage from "../pages/apps/cronExpressionBuilder/images/cron-expression-builder-preview.png";
import cssGradientMakerImage from "../pages/apps/cssGradientMaker/images/css-gradient-maker-preview.png";
import currencyConverterImage from "../pages/apps/currencyConverter/images/currency-converter-preview.svg";
import dailyPlannerImage from "../pages/apps/dailyPlanner/screenshot.png";
import dateCountdownToolImage from "../pages/apps/dateCountdownTool/screenshot.png";
import designTokenEditorImage from "../pages/apps/designTokenEditor/screenshot.png";
import dictionaryImage from "../pages/apps/dictionary/screenshot.png";
import dropdownProImage from "../pages/apps/dropdownPro/screenshot.png";
import dynamicTabsImage from "../pages/apps/dynamicTabs/screenshot.png";
import emiCalculatorImage from "../pages/apps/emiCalculator/screenshot.png";
import fileSizeVisualizerImage from "../pages/apps/fileSizeVisualizer/screenshot.png";
import flashcardStudyToolImage from "../pages/apps/flashcardStudyTool/screenshot.png";
import fontPairStudioImage from "../pages/apps/fontPairStudio/screenshot.png";
import gitCommandExplorerImage from "../pages/apps/gitCommandExplorer/screenshot.png";
import helloReactCounterImage from "../pages/apps/helloReactCounter/screenshot.png";
import helloWorldReactImage from "../pages/apps/helloWorldReact/screenshot.png";
import htmlColorsImage from "../pages/apps/htmlColors/app/screenshot.png";
import httpStatusReferenceImage from "../pages/apps/httpStatusReference/app/screenshot.png";
import iconLibraryBrowserImage from "../pages/apps/iconLibraryBrowser/app/screenshot.png";
import imageCompressionPreviewImage from "../pages/apps/imageCompressionPreview/app/screenshot.png";
import imageSliderImage from "../pages/apps/imageSlider/app/screenshot.png";
import jsxVsJsImage from "../pages/apps/jsxVsJs/app/screenshot.png";
import meditationTimerImage from "../pages/apps/meditationTimer/images/meditation-timer-preview.png";
import memesGeneratorImage from "../pages/apps/memesGenerator/images/memes-generator-preview.png";
import modalPopupImage from "../pages/apps/modalHtmlCssJavascript/images/modal-popup-preview.png";
import modalPopUpImage from "../pages/apps/modalPopUp/images/modal-pop-up-preview.png";
import modalProImage from "../pages/apps/modalPro/images/modal-pro-preview.png";
import mouseTrailerImage from "../pages/apps/mouseTrailer/source/screenshot.png";

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
    {
        number: "13",
        level: "UTILITY",
        title: "Code Diff Viewer",
        description:
            "Compare text or code line by line, review additions and removals, ignore whitespace changes, and copy a readable diff summary.",
        image: codeDiffViewerImage,
        imageAlt: "Code Diff Viewer comparing original and updated text",
        icon: FiCode,
        to: "/apps/code-diff-viewer",
        features: ["Line-by-line diff", "Whitespace option", "Copyable summary"],
        action: "Compare Text",
    },
    {
        number: "14",
        level: "UTILITY",
        title: "Color Contrast Checker",
        description:
            "Check foreground and background colors against WCAG AA and AAA text contrast targets, with live previews and ratio feedback.",
        image: colorContrastCheckerImage,
        imageAlt: "Color Contrast Checker showing foreground and background samples",
        icon: FiEye,
        to: "/apps/color-contrast-checker",
        features: ["Live contrast ratio", "AA and AAA results", "Local color calculations"],
        action: "Check Contrast",
    },
    {
        number: "15",
        level: "CREATIVE",
        title: "Color Gradient Explorer",
        description:
            "Build linear and radial gradients, tune color stops, save favorites in your browser, and copy ready-to-use CSS.",
        image: colorGradientExplorerImage,
        imageAlt: "Color Gradient Explorer with an editable gradient preview and color controls",
        icon: FiDroplet,
        to: "/apps/color-gradient-explorer",
        features: ["Linear and radial gradients", "Two to five color stops", "Save and copy CSS"],
        action: "Explore Gradients",
    },
    {
        number: "16",
        level: "CREATIVE",
        title: "Color Palette Studio",
        description:
            "Explore color harmony, refine five editable swatches, and preview the palette in a sample storefront.",
        image: colorPaletteStudioImage,
        imageAlt: "Color Palette Studio with editable swatches and a live storefront preview",
        icon: FiDroplet,
        to: "/apps/color-palette-studio",
        features: ["Four harmony schemes", "Five editable colors", "Live storefront preview"],
        action: "Build a Palette",
    },
    {
        number: "17",
        level: "UTILITY",
        title: "Color Picker",
        description:
            "Explore named CSS colors or choose a custom shade, then copy its HEX, RGB, and HSL values.",
        image: colorPickerImage,
        imageAlt: "Color Picker with a selected color preview and color value controls",
        icon: FiDroplet,
        to: "/apps/color-picker",
        features: ["Named CSS colors", "HEX, RGB, and HSL", "Browser-local selection"],
        action: "Pick a Color",
    },
    {
        number: "18",
        level: "UTILITY",
        title: "Cron Expression Builder",
        description:
            "Build and validate five-field cron schedules, read a plain-language explanation, and preview upcoming run times in your local timezone.",
        image: cronExpressionBuilderImage,
        imageAlt: "Cron Expression Builder with five schedule fields and upcoming runs",
        icon: FiClock,
        to: "/apps/cron-expression-builder",
        features: ["Five-field syntax", "Plain-language explanations", "Upcoming local runs"],
        action: "Build a Schedule",
    },
    {
        number: "19",
        level: "CREATIVE",
        title: "CSS Gradient Maker",
        description:
            "Create linear or radial gradients, adjust two to five color stops, and copy the generated CSS declaration.",
        image: cssGradientMakerImage,
        imageAlt: "CSS Gradient Maker with editable color stops and a live gradient preview",
        icon: FiDroplet,
        to: "/apps/css-gradient-maker",
        features: ["Linear and radial gradients", "Editable color stops", "Copyable CSS"],
        action: "Make a Gradient",
    },
    {
        number: "20",
        level: "UTILITY",
        title: "Currency Converter",
        description:
            "Convert between global currencies with published reference rates, inverse rates, and a quick currency swap.",
        image: currencyConverterImage,
        imageAlt: "Currency Converter showing USD to INR amount and reference conversion",
        icon: FiRefreshCw,
        to: "/apps/currency-converter",
        features: ["Reference exchange rates", "Currency pair swap", "Copyable result"],
        action: "Convert Currency",
    },
    {
        number: "21",
        level: "UTILITY",
        title: "Daily Planner",
        description:
            "Plan a date-specific day, track timed tasks, and keep working notes saved in your browser.",
        image: dailyPlannerImage,
        imageAlt: "Daily Planner schedule with date navigation, task timeline, and notes panel",
        icon: FiCalendar,
        to: "/apps/daily-planner",
        features: ["Date-specific schedules", "Timed task blocks", "Browser-saved notes"],
        action: "Plan Your Day",
    },
    {
        number: "22",
        level: "UTILITY",
        title: "Date Countdown Tool",
        description:
            "Track important dates with live countdowns, elapsed-time views, and a browser-saved event list.",
        image: dateCountdownToolImage,
        imageAlt: "Date Countdown Tool with a live timer and saved event list",
        icon: FiClock,
        to: "/apps/date-countdown-tool",
        features: ["Live countdowns", "Past-event elapsed time", "Local event storage"],
        action: "Track a Date",
    },
    {
        number: "23",
        level: "CREATIVE",
        title: "Design Token Editor",
        description:
            "Create, organize, preview, and export reusable color, typography, spacing, radius, and shadow tokens.",
        image: designTokenEditorImage,
        imageAlt: "Design Token Editor workspace with a token board and live preview",
        icon: FiLayers,
        to: "/apps/design-token-editor",
        features: ["Editable design tokens", "Live interface preview", "CSS and JSON export"],
        action: "Edit Design Tokens",
    },
    {
        number: "24",
        level: "REFERENCE",
        title: "Dictionary",
        description:
            "Look up a word and explore its definitions and parts of speech with a quick Datamuse-powered search.",
        image: dictionaryImage,
        imageAlt: "Dictionary search page ready to look up word meanings",
        icon: FiBookOpen,
        to: "/apps/dictionary",
        features: ["Word lookup", "Definitions by part of speech", "Responsive reference view"],
        action: "Look Up a Word",
    },
    {
        number: "25",
        level: "COMPONENT",
        title: "Dropdown Pro",
        description:
            "Explore accessible dropdown menus with keyboard navigation, viewport-aware positioning, nested actions, and portal rendering.",
        image: dropdownProImage,
        imageAlt: "Dropdown Pro interface demonstrating nested workspace actions",
        icon: FiChevronDown,
        to: "/apps/dropdown-pro",
        features: ["Keyboard navigation", "Smart menu placement", "Nested actions"],
        action: "Try Dropdown Pro",
    },
    {
        number: "26",
        level: "LEARNING",
        title: "Dynamic Tabs",
        description:
            "Compare procedural, functional, object-oriented, scripting, and logic programming with concise examples.",
        image: dynamicTabsImage,
        imageAlt: "Dynamic Tabs interface comparing programming paradigms",
        icon: FiLayers,
        to: "/apps/dynamic-tabs",
        features: ["Five paradigm views", "Keyboard-accessible tabs", "Local example data"],
        action: "Compare Paradigms",
    },
    {
        number: "27",
        level: "CALCULATOR",
        title: "EMI Calculator",
        description:
            "Estimate a reducing-balance monthly loan payment and see how principal and interest change across the first six payments.",
        image: emiCalculatorImage,
        imageAlt: "ClearRate EMI Calculator showing estimated payment and loan breakdown",
        icon: FiPercent,
        to: "/apps/emi-calculator",
        features: ["Live EMI estimate", "Principal and interest split", "Six-payment schedule"],
        action: "Estimate a Payment",
    },
    {
        number: "28",
        level: "UTILITY",
        title: "File Size Visualizer",
        description:
            "Analyze file metadata locally, compare size categories, and export a clear report without uploading file contents.",
        image: fileSizeVisualizerImage,
        imageAlt: "File Size Visualizer showing a local file size report",
        icon: FiHardDrive,
        to: "/apps/file-size-visualizer",
        features: ["Local metadata only", "Category size summaries", "JSON report export"],
        action: "Review File Sizes",
    },
    {
        number: "29",
        level: "LEARNING",
        title: "Flashcard Study Tool",
        description:
            "Practice active recall with a personal question-and-answer deck, progress tracking, and cards saved in your browser.",
        image: flashcardStudyToolImage,
        imageAlt: "Recall flashcard study tool showing a question card and deck progress",
        icon: FiBookOpen,
        to: "/apps/flashcard-study-tool",
        features: ["Flip to reveal answers", "Track known cards", "Create custom cards"],
        action: "Study with Recall",
    },
    {
        number: "30",
        level: "DESIGN",
        title: "FontPair Studio",
        description:
            "Explore curated Google Font combinations with live interface previews, practical filters, CSS snippets, and a saved shortlist.",
        image: fontPairStudioImage,
        imageAlt: "FontPair Studio showing a curated heading and body font pairing",
        icon: FiEye,
        to: "/apps/fontpair-studio",
        features: ["Live font previews", "CSS snippet copy", "Saved favorites"],
        action: "Explore Font Pairs",
    },
    {
        number: "31",
        level: "UTILITY",
        title: "Digital Clock",
        description: "Track live time and date in your local zone or select another timezone.",
        image: digitalClockImage,
        imageAlt: "Digital clock with live hours, minutes, seconds, and timezone selector",
        icon: FiClock,
        to: "/apps/digital-clock",
        features: ["Live time and date", "Timezone selector", "Browser Intl formatting"],
        action: "Open Digital Clock",
    },
    {
        number: "32",
        level: "UTILITY",
        title: "Git Command Explorer",
        description:
            "Find a Git command, understand its effects and risk, review safer alternatives, and copy it without executing anything.",
        image: gitCommandExplorerImage,
        imageAlt: "Git Command Explorer showing command search and risk guidance",
        icon: FiCode,
        to: "/apps/git-command-explorer",
        features: ["Search 29 commands", "Risk guidance", "Copy without execution"],
        action: "Explore Git Commands",
    },
    {
        number: "33",
        level: "FOUNDATION",
        title: "Hello React Counter",
        description:
            "A compact React starter with an interactive counter, accessible controls, and a responsive project shell.",
        image: helloReactCounterImage,
        imageAlt: "Hello React starter showing its interactive counter",
        icon: FiCode,
        to: "/apps/hello-react-counter",
        features: ["Interactive counter", "Reset control", "Responsive layout"],
        action: "Try Hello React Counter",
    },
    {
        number: "34",
        level: "FOUNDATION",
        title: "Hello World React",
        description:
            "A clean React starter landing page with responsive navigation, React docs links, and a polished footer.",
        image: helloWorldReactImage,
        imageAlt: "Hello World React starter landing page preview",
        icon: FiCode,
        to: "/apps/hello-world-react",
        features: ["Responsive navigation", "React documentation links", "Scroll-to-top control"],
        action: "Try Hello World React",
    },
    {
        number: "35",
        level: "UTILITY",
        title: "HTML Colors",
        description:
            "Browse the 148 CSS named colors, adjust RGB channels, and copy matching RGB, HEX, HSL, or color-name values.",
        image: htmlColorsImage,
        imageAlt: "HTML Colors palette and converter preview",
        icon: FiDroplet,
        to: "/apps/html-colors",
        features: ["148 CSS named colors", "Live RGB, HEX, and HSL values", "Copy-ready values"],
        action: "Explore HTML Colors",
    },
    {
        number: "36",
        level: "UTILITY",
        title: "HTTP Status Reference",
        description:
            "Search HTTP response codes, understand common causes, and get a practical next check with standards-based guidance.",
        image: httpStatusReferenceImage,
        imageAlt: "HTTP Status Reference with searchable response-code guidance",
        icon: FiRefreshCw,
        to: "/apps/http-status-reference",
        features: ["42 status-code entries", "Search and class filters", "Copy codes and next-step guidance"],
        action: "Explore HTTP Statuses",
    },
    {
        number: "37",
        level: "UTILITY",
        title: "Icon Library Browser",
        description:
            "Search curated Lucide, Feather, and Font Awesome icons, preview size and color, then copy React or SVG code.",
        image: iconLibraryBrowserImage,
        imageAlt: "Icon Library Browser with searchable icon catalog and preview controls",
        icon: FiLayers,
        to: "/apps/icon-library-browser",
        features: ["85 icons across three collections", "Search and favorites", "Copy React or SVG, download SVG"],
        action: "Browse Icons",
    },
    {
        number: "38",
        level: "UTILITY",
        title: "Image Compression Preview",
        description:
            "Compare a browser-compressed JPEG or WebP copy, tune quality, and download the smaller file without changing the original.",
        image: imageCompressionPreviewImage,
        imageAlt: "Image Compression Preview with side-by-side file comparison and quality controls",
        icon: FiImage,
        to: "/apps/image-compression-preview",
        features: ["Local browser encoding", "JPEG and WebP output", "Actual size comparison"],
        action: "Compress an Image",
    },
    {
        number: "39",
        level: "FOUNDATION",
        title: "Image Slider",
        description:
            "Move through a responsive image collection with captions, slide indicators, keyboard-friendly controls, and optional autoplay.",
        image: imageSliderImage,
        imageAlt: "Responsive image slider preview with captions and navigation controls",
        icon: FiImage,
        to: "/apps/image-slider",
        features: ["Previous and next controls", "Selectable slide indicators", "Autoplay with hover and focus pause"],
        action: "Explore Image Slider",
    },
    {
        number: "40",
        level: "FOUNDATION",
        title: "JSX vs JS",
        description:
            "Compare the same interactive React counter written with JSX and React.createElement, using shared state.",
        image: jsxVsJsImage,
        imageAlt: "JSX vs JS comparison showing equivalent React counter implementations",
        icon: FiCode,
        to: "/apps/jsx-vs-js",
        features: ["Side-by-side examples", "Shared counter state", "Increment and reset controls"],
        action: "Compare JSX and JS",
    },
    {
        number: "41",
        level: "FOUNDATION",
        title: "Light Dark Theme Toggle",
        description:
            "Switch between light and dark themes, save the choice in browser storage, and explore the accessible React interface.",
        image: lightDarkThemeToggleImage,
        imageAlt: "Light Dark Theme Toggle app preview with theme controls",
        icon: FiSun,
        to: "/apps/light-dark-theme-toggle",
        features: ["Light and dark themes", "Saved browser preference", "Accessible theme control"],
        action: "Try Theme Toggle",
    },
    {
        number: "42",
        level: "UTILITY",
        title: "Meditation Timer",
        description:
            "Set a short breathing session, follow a gentle rhythm, and review your private practice history.",
        image: meditationTimerImage,
        imageAlt: "Quiet Hours Meditation Timer with a session timer and practice log",
        icon: FiClock,
        to: "/apps/meditation-timer",
        features: ["3 to 20 minute sessions", "Guided breathing rhythms", "Private local practice log"],
        action: "Start a Quiet Session",
    },
    {
        number: "43",
        level: "CREATIVE",
        title: "Meme Generator",
        description:
            "Browse public Imgflip templates, add top and bottom captions, and download your meme as a PNG.",
        image: memesGeneratorImage,
        imageAlt: "Meme Generator with caption controls and a grid of meme templates",
        icon: FiImage,
        to: "/apps/memes-generator",
        features: ["Live public templates", "Captions stay in your browser", "PNG downloads"],
        action: "Create a Meme",
    },
    {
        number: "44",
        level: "FOUNDATION",
        title: "Subscription Modal",
        description:
            "Explore an accessible subscription modal with keyboard focus control, responsive styling, and a local-only form demo.",
        image: modalPopupImage,
        imageAlt: "Modal Studio subscription form demo with a blurred dark background",
        icon: FiLayers,
        to: "/apps/modal-popup",
        features: ["Keyboard focus trap", "Escape and backdrop close", "Local-only form validation"],
        action: "Open Modal Demo",
    },
    {
        number: "45",
        level: "FOUNDATION",
        title: "Message Preview Modal",
        description:
            "Enter a short message and preview it in an accessible, responsive React dialog that keeps the content in your browser.",
        image: modalPopUpImage,
        imageAlt: "Message Preview Modal React component demonstration",
        icon: FiMessageSquare,
        to: "/apps/modal-pop-up",
        features: ["Input validation", "Portal-based dialog", "Keyboard focus management"],
        action: "Preview a Message",
    },
    {
        number: "46",
        level: "ADVANCED",
        title: "Modal Pro",
        description:
            "Explore accessible modal and drawer patterns with nested overlays, confirmation flows, and browser-local profile management.",
        image: modalProImage,
        imageAlt: "Modal Pro playground for modal and drawer interaction patterns",
        icon: FiLayers,
        to: "/apps/modal-pro",
        features: ["Nested modal and drawer stack", "Focus and scroll management", "Local profile CRUD and JSON export"],
        action: "Explore Modal Pro",
    },
    {
        number: "47",
        level: "CREATIVE",
        title: "Mouse Trailer",
        description:
            "A cursor-following interaction demo with contextual hover labels, responsive image cards, and reduced-motion support.",
        image: mouseTrailerImage,
        imageAlt: "Mouse Trailer demo with a responsive image gallery and custom pointer cue",
        icon: FiEye,
        to: "/apps/mouse-trailer",
        features: ["Cursor-following trailer", "Context labels on hover", "Touch and reduced-motion support"],
        action: "Try Mouse Trailer",
    },
];

export default apps;
