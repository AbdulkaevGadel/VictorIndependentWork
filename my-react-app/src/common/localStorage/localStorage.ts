
import type {RootState} from "../../store/store.ts";

export const loadState = (): unknown => {
    try {
        const serializedState = localStorage.getItem('counterState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error('Could not load state', err);
        return undefined;
    }
};

export const saveState = (state: RootState): void => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('counterState', serializedState);
    } catch (err) {
        console.error('Could not save state', err);
    }
};