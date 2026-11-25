import { FiCheckCircle, FiInfo, FiAlertCircle, FiX } from "react-icons/fi";

import styles from "./style.module.css";

const Toast = ({ visible, type = "info", message, onClose }) => {
    if (!visible) {
        return null;
    }

    const Icon =
        type === "success"
            ? FiCheckCircle
            : type === "error"
              ? FiAlertCircle
              : FiInfo;

    return (
        <div className={`${styles.wrapper} ${type}`}>
            <Icon className="statusIcon" />

            <span>{message}</span>

            <button
                type="button"
                onClick={onClose}
                aria-label="Close notification"
            >
                <FiX />
            </button>
        </div>
    );
};

export default Toast;
