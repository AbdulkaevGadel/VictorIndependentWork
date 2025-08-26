import s from "./CounterSettingsField.module.scss"
import React, {useState} from "react";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import {setFlagDisabledButtonAC} from "../../store/reducers/counter-reducer.ts";

type CounterSettingsFieldPropsType = {
    title: string,
    valueInput: number
    onChangeHandlerStartValue?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerMaxValue?: (e: React.ChangeEvent<HTMLInputElement>) => void
    wrapperClass: string
}


export const CounterSettingsField = (props: CounterSettingsFieldPropsType) => {
    // console.log(props.valueInput)
    console.log('render')
    const [valueInput, setValueInput] = useState(props.valueInput)

    const dispatch = useAppDispatch()
    console.log(valueInput)


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