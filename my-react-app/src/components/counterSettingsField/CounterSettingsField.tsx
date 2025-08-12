import s from "./CounterSettingsField.module.scss"
import React, {type Dispatch, type SetStateAction} from "react";

type CounterSettingsFieldPropsType = {
    title: string,
    valueInput: number
    setValueMaxInput?: Dispatch<SetStateAction<number>>
    setValueStartInput?: Dispatch<SetStateAction<number>>
    setIsClickedButtonSet: Dispatch<SetStateAction<boolean>>
    onChangeHandlerStartValue?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerMaxValue?: (e: React.ChangeEvent<HTMLInputElement>) => void
    wrapperClass: string
}


export const CounterSettingsField = (props: CounterSettingsFieldPropsType) => {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setIsClickedButtonSet(true)
        if (e.target.name === 'max value:') {
            props.setValueMaxInput?.(Number(e.target.value))
            props.onChangeHandlerMaxValue?.(e)
        }

        if (e.target.name === 'start value:') {
            props.setValueStartInput?.(Number(e.target.value))
            props.onChangeHandlerStartValue?.(e)
        }

    }


    return (
        <div className={s.counter}>
            <span>{props.title}</span>
            <input
                className={props.wrapperClass}
                type="number" name={props.title} value={props.valueInput} onChange={onChangeHandler}
            />
        </div>
    );
};