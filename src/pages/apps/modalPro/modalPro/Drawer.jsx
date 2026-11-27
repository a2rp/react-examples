import { useId, useLayoutEffect, useRef } from "react";
import { Overlay, DrawerPanel } from "./Styled.js";
import Portal from "./Portal.jsx";
import useScrollLock from "./useScrollLock.js";
import useDialogBehavior from "./useDialogBehavior.js";
import { acquireZ } from "./ZStackManager.js";
import { FiX } from "react-icons/fi";

export default function Drawer({
    open,
    onClose,
    side = "right",
    title = "Drawer",
    closeOnEsc = true,
    closeOnBackdrop = true,
    children,
}) {
    const dialogRef = useRef(null);
    const stackRef = useRef(null);
    const titleId = useId();

    useScrollLock(open);

    useLayoutEffect(() => {
        if (!open) return undefined;

        const stack = acquireZ();
        stackRef.current = stack;
        const overlay = dialogRef.current?.closest("[data-modalpro-overlay]");
        if (overlay) overlay.style.zIndex = String(stack.z);
        if (dialogRef.current) dialogRef.current.style.zIndex = String(stack.z + 1);

        return () => {
            stack.release();
            stackRef.current = null;
        };
    }, [open]);

    useDialogBehavior({
        open,
        onClose,
        closeOnEsc,
        dialogRef,
        stackRef,
    });

    if (!open) return null;

    return (
        <Portal>
            <Overlay
                data-modalpro-overlay
                role="presentation"
                onMouseDown={(event) => {
                    if (
                        closeOnBackdrop &&
                        stackRef.current?.isTop() &&
                        event.target === event.currentTarget
                    ) {
                        onClose?.();
                    }
                }}
            >
                <DrawerPanel
                    ref={dialogRef}
                    $side={side}
                    $open={open}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={titleId}
                    tabIndex={-1}
                >
                    <div className="dialogHeader">
                        <h3 id={titleId}>{title}</h3>
                        <button
                            type="button"
                            data-dialog-close
                            aria-label="Close drawer"
                            onClick={onClose}
                        >
                            <FiX />
                        </button>
                    </div>
                    <div className="dialogBody">{children}</div>
                </DrawerPanel>
            </Overlay>
        </Portal>
    );
}
