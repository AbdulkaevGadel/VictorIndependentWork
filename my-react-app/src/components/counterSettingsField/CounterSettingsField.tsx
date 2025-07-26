import s from "./CounterSettingsField.module.scss"
import React, {useState} from "react";

type CounterSettingsFieldPropsType = {
    title: string,
    valueInput: number,
    maxValue?: number
    startValue?: number
    // onChangeHandlerValue: (value: number) => void,
}


export const CounterSettingsField = (props: CounterSettingsFieldPropsType) => {

    const [valueInput,setValueInput]=useState(props.valueInput)
    const [valueMaxInput,setValueMaxInput]=useState(props.maxValue)
    const [valueStartInput,setValueStartInput]=useState(props.startValue)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.name==='max value:'){
            setValueInput(Number(e.target.value))
            setValueMaxInput(Number(valueInput+1))
        }
        if(e.target.name==='start value:'){
            setValueInput(Number(e.target.value))
            setValueStartInput(Number(valueInput+1))
        }
        console.log(`value: ${valueInput}`)
        console.log(`valueMAx: ${valueMaxInput}`)
        console.log(`valueStart: ${valueStartInput}`)
    }

    console.log(valueInput)
    console.log(valueMaxInput)
    console.log(valueStartInput)

    return (
        <div className={s.counter}>
            <span>{props.title}</span>
            <input type="number" name={props.title} value={valueInput} onChange={onChangeHandler}/>
        </div>
    );
};