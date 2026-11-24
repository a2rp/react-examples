export const accordionItems = [
    {
        id: "getting-started",
        title: "Getting Started",
        subtitle: "Understand how Accordion Pro works.",
        content: (
            <>
                <p>
                    Accordion Pro is a reusable React accordion with persistent
                    open state, smooth interactions, and modular architecture.
                </p>
                <p>
                    Open or close any panel individually. Your current state is
                    saved automatically and restored after refresh.
                </p>
            </>
        ),
    },
    {
        id: "persistent-state",
        title: "Persistent State",
        subtitle: "Open panels remain saved between sessions.",
        content: (
            <>
                <p>
                    Accordion Pro stores the currently opened panel IDs in
                    localStorage.
                </p>
                <p>
                    Refreshing or reopening the page restores the last saved
                    accordion state automatically.
                </p>
            </>
        ),
    },
    {
        id: "multiple-panels",
        title: "Multiple Panels",
        subtitle: "Keep more than one section open at the same time.",
        content: (
            <>
                <p>
                    Unlike traditional single-open accordions, Accordion Pro
                    allows multiple panels to stay expanded simultaneously.
                </p>
                <p>
                    This is useful for documentation, FAQs, dashboards, and
                    knowledge-base interfaces.
                </p>
            </>
        ),
    },
    {
        id: "quick-controls",
        title: "Quick Controls",
        subtitle: "Manage every panel instantly.",
        content: (
            <>
                <p>
                    Use Expand All to open every section or Collapse All to
                    close them instantly.
                </p>
                <p>
                    Reset State clears the saved accordion state and restores
                    the default configuration.
                </p>
            </>
        ),
    },
    {
        id: "keyboard-accessibility",
        title: "Keyboard Accessibility",
        subtitle: "Designed for mouse and keyboard interaction.",
        content: (
            <>
                <p>
                    Every accordion trigger uses a native button with expanded
                    state and panel relationships.
                </p>
                <p>Use Tab to move between questions and Enter or Space to toggle them.</p>
            </>
        ),
    },
    {
        id: "microinteractions",
        title: "Microinteractions",
        subtitle: "Small details create a polished experience.",
        content: (
            <>
                <p>
                    Hover states, card elevation, progress feedback, and smooth
                    transitions make the interface feel responsive.
                </p>
                <p>Motion stays subtle and respects reduced-motion preferences.</p>
            </>
        ),
    },
    {
        id: "responsive-design",
        title: "Responsive Design",
        subtitle: "Built to work across different screen sizes.",
        content: (
            <>
                <p>The layout adapts to desktop, tablet, and mobile screens.</p>
                <p>Controls, accordion cards, and typography reorganize on smaller devices.</p>
            </>
        ),
    },
    {
        id: "reusable-architecture",
        title: "Reusable Architecture",
        subtitle: "Components remain clean and easy to maintain.",
        content: (
            <>
                <p>
                    The interface separates page layout, controls, accordion
                    behavior, data, and localStorage logic.
                </p>
                <p>This makes the component easier to extend and reuse.</p>
            </>
        ),
    },
];
