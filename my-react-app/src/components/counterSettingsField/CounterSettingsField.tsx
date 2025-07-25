import s from "./CounterSettingsField.module.scss"
import React, {useState} from "react";

type CounterSettingsFieldPropsType = {
    title: string,
    valueInput: number,
    onChangeHandlerValue: (value: number) => void,
}


export const CounterSettingsField = (props: CounterSettingsFieldPropsType) => {

    const [valueInput,setValueInput]=useState(props.valueInput)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(Number(e.target.value))
        props. onChangeHandlerValue(valueInput)
    }

    return (
        <div className={s.counter}>
            <span>{props.title}</span>
            <input type="number" value={valueInput} onChange={onChangeHandler}/>
        </div>
    );
};