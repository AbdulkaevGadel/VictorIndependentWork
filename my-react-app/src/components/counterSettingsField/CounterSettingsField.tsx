import s from "./CounterSettingsField.module.scss"
import React, {type Dispatch, type SetStateAction, useState} from "react";

type CounterSettingsFieldPropsType = {
    title: string,
    valueInput: number,
    maxValue?: number
    startValue?: number
    setValueMaxInput?:Dispatch<SetStateAction<number>>
    setValueStartInput?:Dispatch<SetStateAction<number>>
    // onChangeHandlerValue: (value: number) => void,
}


export const CounterSettingsField = (props: CounterSettingsFieldPropsType) => {

    const [valueInput,setValueInput]=useState(props.valueInput)


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.name==='max value:'){
            setValueInput(Number(e.target.value))
            props.setValueMaxInput?.(Number(e.target.value))
        }
        if(e.target.name==='start value:'){
            setValueInput(Number(e.target.value))
            props.setValueStartInput?.(Number(e.target.value))
        }

    }

    console.log(`value: ${valueInput}`)


    return (
        <div className={s.counter}>
            <span>{props.title}</span>
            <input type="number" name={props.title} value={valueInput} onChange={onChangeHandler}/>
        </div>
    );
};