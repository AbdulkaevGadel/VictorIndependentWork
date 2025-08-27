import s from "./CounterSettingsField.module.scss"
import React, {useState} from "react";
import {useAppDispatch} from "../../common/customHooks/useAppDispatch.ts";
import {setFlagDisabledButtonAC} from "../../store/actions/counter-action-creators.ts";
import type {CounterSettingsFieldPropsType} from "./CounterSettingsFieldTypes.ts";


export const CounterSettingsField = (props: CounterSettingsFieldPropsType) => {

    const [valueInput, setValueInput] = useState(props.valueInput)
    const dispatch = useAppDispatch()

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFlagDisabledButtonAC(true))
        if (e.target.name === 'max value:') {
            setValueInput(Number(e.target.value))
            props.onChangeHandlerMaxValue?.(e)
        }

        if (e.target.name === 'start value:') {
            setValueInput(Number(e.target.value))
            props.onChangeHandlerStartValue?.(e)
        }
        setValueInput(Number(e.target.value))

    }


    return (
        <div className={s.counter}>
            <span>{props.title}</span>
            <input
                className={props.wrapperClass}
                type="number" name={props.title} value={valueInput} onChange={onChangeHandler}
            />
        </div>
    );
};