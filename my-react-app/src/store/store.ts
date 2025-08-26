import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {counterReducer} from "./reducers/counter-reducer.ts";
import {loadState, saveState} from "../common/localStorage/localStorage.ts";


// объединение reducer'ов с помощью combineReducers
const rootReducer = combineReducers({
    counter: counterReducer,
})

const preloadedState = loadState();

// создание store
export const store = configureStore({
    reducer: rootReducer,
    preloadedState: preloadedState as ReturnType<typeof rootReducer> | undefined,
})

store.subscribe(() => {
    saveState(store.getState());
});

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>

// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch

// для возможности обращения к store в консоли браузера
// @ts-ignore
window.store = store