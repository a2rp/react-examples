import { useContext } from "react";
import ConfirmCtx from "./confirmContext.js";

export function useConfirm() {
    const ctx = useContext(ConfirmCtx);
    if (!ctx) throw new Error("useConfirm must be used inside <ConfirmProvider>");
    return ctx;
}
