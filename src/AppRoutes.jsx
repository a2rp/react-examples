import { lazy, Suspense } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";

import Spinner from "./components/spinner";

const HomePage = lazy(() => import("./pages/home"));
const AppsPage = lazy(() => import("./pages/apps"));
const AccordionPage = lazy(() => import("./pages/apps/accordion/index.jsx"));
const AccordionProPage = lazy(() => import("./pages/apps/accordion-pro/index.jsx"));
const AnalogClockPage = lazy(() => import("./pages/apps/analog-clock/index.jsx"));
const HelloReactPage = lazy(() => import("./pages/apps/helloReact/index.jsx"));
const BasicThemedAppPage = lazy(() => import("./pages/apps/basicThemedApp/index.jsx"));
const AvataarGeneratorPage = lazy(() => import("./pages/apps/avataarGenerator/index.jsx"));
const RandomAvataarsPage = lazy(() => import("./pages/apps/randomAvataars/index.jsx"));
const ApiRequestWorkbenchPage = lazy(() => import("./pages/apps/apiRequestWorkbench/index.jsx"));
const Base64ConverterPage = lazy(() => import("./pages/apps/base64Converter/index.jsx"));
const BlobGeneratorPage = lazy(() => import("./pages/apps/blobGenerator/index.jsx"));
const CinematicCarouselPage = lazy(() => import("./pages/apps/cinematicCarousel/index.jsx"));
const ClipboardSnippetLibraryPage = lazy(() => import("./pages/apps/clipboardSnippetLibrary/index.jsx"));
const CodeDiffViewerPage = lazy(() => import("./pages/apps/codeDiffViewer/index.jsx"));
const ColorContrastCheckerPage = lazy(() => import("./pages/apps/colorContrastChecker/index.jsx"));
const ColorGradientExplorerPage = lazy(() => import("./pages/apps/colorGradientExplorer/index.jsx"));
const ColorPaletteStudioPage = lazy(() => import("./pages/apps/colorPaletteStudio/index.jsx"));
const ColorPickerPage = lazy(() => import("./pages/apps/colorPicker/index.jsx"));
const CronExpressionBuilderPage = lazy(() => import("./pages/apps/cronExpressionBuilder/index.jsx"));
const CssGradientMakerPage = lazy(() => import("./pages/apps/cssGradientMaker/index.jsx"));
const CurrencyConverterPage = lazy(() => import("./pages/apps/currencyConverter/index.jsx"));
const DailyPlannerPage = lazy(() => import("./pages/apps/dailyPlanner/index.jsx"));
const DateCountdownToolPage = lazy(() => import("./pages/apps/dateCountdownTool/index.jsx"));
const AboutPage = lazy(() => import("./pages/about"));
const ContactPage = lazy(() => import("./pages/contact"));
const NotFoundPage = lazy(() => import("./pages/not-found"));

function AppRoutes() {
    const location = useLocation();

    return (
        <Suspense fallback={<Spinner />} key={location.pathname}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/apps" element={<Outlet />}>
                    <Route index element={<AppsPage />} />
                    <Route path="accordion" element={<AccordionPage />} />
                    <Route path="accordion-pro" element={<AccordionProPage />} />
                    <Route path="analog-clock" element={<AnalogClockPage />} />
                    <Route path="hello-react" element={<HelloReactPage />} />
                    <Route path="basic-themed-app" element={<BasicThemedAppPage />} />
                    <Route path="avataar-generator" element={<AvataarGeneratorPage />} />
                    <Route path="random-avataars" element={<RandomAvataarsPage />} />
                    <Route path="api-request-workbench" element={<ApiRequestWorkbenchPage />} />
                    <Route path="base64-converter" element={<Base64ConverterPage />} />
                    <Route path="blob-generator" element={<BlobGeneratorPage />} />
                    <Route path="cinematic-carousel-ui" element={<CinematicCarouselPage />} />
                    <Route path="clipboard-snippet-library" element={<ClipboardSnippetLibraryPage />} />
                    <Route path="code-diff-viewer" element={<CodeDiffViewerPage />} />
                    <Route path="color-contrast-checker" element={<ColorContrastCheckerPage />} />
                    <Route path="color-gradient-explorer" element={<ColorGradientExplorerPage />} />
                    <Route path="color-palette-studio" element={<ColorPaletteStudioPage />} />
                    <Route path="color-picker" element={<ColorPickerPage />} />
                    <Route path="cron-expression-builder" element={<CronExpressionBuilderPage />} />
                    <Route path="css-gradient-maker" element={<CssGradientMakerPage />} />
                    <Route path="currency-converter" element={<CurrencyConverterPage />} />
                    <Route path="daily-planner" element={<DailyPlannerPage />} />
                    <Route path="date-countdown-tool" element={<DateCountdownToolPage />} />
                </Route>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    );
}

export default AppRoutes;
