import s from './CounterActions.module.scss';
import {Children, type ReactNode} from "react";

type CounterActionsProps = {
    children: ReactNode;
}

export const CounterActions = ({children}: CounterActionsProps) => {

    // Получаем количество детей
    const count = Children.count(children);

    // Определяем класс в зависимости от количества элементов
    const wrapperClass = count === 1
        ? s.wrapper_button_one_element
        : s.wrapper_button_elements;

    return (
        <div className={wrapperClass}>{children}</div>
    );
};
