import s from "./CounterMainPanel.module.scss";
import type {ReactNode} from "react";


type CounterMainPanelProps = {
    children?: ReactNode;
}

export const CounterMainPanel = ({children}:CounterMainPanelProps) => {
    return (
        <div className={s.main}>{children}</div>
    );
};

