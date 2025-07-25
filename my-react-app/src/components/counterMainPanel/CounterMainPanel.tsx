import s from "./CounterMainPanel.module.scss";
import {Children, type ReactNode} from "react";


type CounterMainPanelProps = {
    children?: ReactNode;
}

export const CounterMainPanel = ({children}:CounterMainPanelProps) => {

    const count = Children.count(children);

    const wrapperClass = count === 1
        ? s.mainCounterOneElement
        : s.mainCounterElements;

    return (
        <div className={wrapperClass}>{children}</div>
    );
};

