import {useState, useEffect} from 'react';
import type {CountSettingsType} from "../App.tsx";

export function useLocalStorage<T>(key: string, initialValue: T):
    [CountSettingsType, (value: (((prevState: CountSettingsType) => CountSettingsType) | CountSettingsType)) => void] {
    const [value, setValue] = useState<CountSettingsType>(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}