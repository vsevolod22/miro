import { startTransition, useDeferredValue, useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);


    useEffect(() => {
        const timer = setTimeout(
            () => startTransition(
            () => setDebouncedValue(value)),
            delay
        );

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay])

    return  debouncedValue;
}