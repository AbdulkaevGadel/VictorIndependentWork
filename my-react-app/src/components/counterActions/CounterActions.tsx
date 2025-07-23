import s from './CounterActions.module.scss';
import {Children, type ReactNode} from "react";

type CounterActionsProps = {
    children: ReactNode;
}

export const CounterActions = ({children}: CounterActionsProps) => {

    const count = Children.count(children);

    const wrapperClass = count === 1
        ? s.wrapper_button_one_element
        : s.wrapper_button_elements;

    return (
        <div className={wrapperClass}>{children}</div>
    );
};
