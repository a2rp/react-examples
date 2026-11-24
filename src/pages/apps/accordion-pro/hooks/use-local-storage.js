import { useCallback, useState } from "react";

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const savedValue = window.localStorage.getItem(key);
            return savedValue === null ? initialValue : JSON.parse(savedValue);
        } catch {
            return initialValue;
        }
    });

    const setValue = useCallback(
        (value) => {
            setStoredValue((previousValue) => {
                const nextValue =
                    typeof value === "function" ? value(previousValue) : value;

                try {
                    window.localStorage.setItem(key, JSON.stringify(nextValue));
                } catch {
                    // Keep the in-memory state usable when browser storage is unavailable.
                }

                return nextValue;
            });
        },
        [key],
    );

    const resetValue = useCallback(() => {
        try {
            window.localStorage.removeItem(key);
        } catch {
            // Reset the in-memory value even when browser storage is unavailable.
        }

        setStoredValue(initialValue);
    }, [initialValue, key]);

    return [storedValue, setValue, resetValue];
}

export default useLocalStorage;
