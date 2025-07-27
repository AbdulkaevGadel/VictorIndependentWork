import s from "./CounterSettingsField.module.scss"
import React, {type Dispatch, type SetStateAction, useState} from "react";

type CounterSettingsFieldPropsType = {
    title: string,
    valueInput:number
    maxValue?: number
    startValue: number
    setValueMaxInput?:Dispatch<SetStateAction<number>>
    valueMaxInput:number
    valueStartInput:number
    setValueStartInput?:Dispatch<SetStateAction<number>>
    setFlagDisabledButton:Dispatch<SetStateAction<boolean>>
    setCount: Dispatch<SetStateAction<string>>
    count?:string
    flagDisabledButton:boolean
    intermediateValueStartInput:number
    setIntermediateValueStartInput:Dispatch<SetStateAction<number>>
    setIsClickedButtonSet:Dispatch<SetStateAction<boolean>>
}


export const CounterSettingsField = (props: CounterSettingsFieldPropsType) => {

    const [valueInput,setValueInput]=useState(props.valueInput)

    const incorrectValue:string='Incorrect value!'
    const enterValue:string = 'Enter value and press "set"'

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setIsClickedButtonSet(true)
        if((Number(e.target.value)) >0&&props.flagDisabledButton){
            props.setFlagDisabledButton(false)
        }
        if(0<=props.intermediateValueStartInput&&props.flagDisabledButton){
            props.setFlagDisabledButton(false)
        }
        if((Number(e.target.value)<0)||props.intermediateValueStartInput<0){
            props.setFlagDisabledButton(true)
        }
        if(e.target.name==='max value:'){
            setValueInput(Number(e.target.value))
            props.setValueMaxInput?.(Number(e.target.value))
        }
        if(e.target.name==='start value:'){
            if(Number(e.target.value) <0){
                props.setCount(incorrectValue)
            }
            setValueInput(Number(e.target.value))
            props.setValueStartInput?.(Number(e.target.value))
            if(0<=(Number(e.target.value))&&props.flagDisabledButton){
                props.setIntermediateValueStartInput(Number(e.target.value))
                props.setFlagDisabledButton(false)
            }
        }
        if(e.target.name==='max value:' && props.intermediateValueStartInput <0 ){
            props.setFlagDisabledButton(true)
        }
        if(0 <= Number(e.target.value)){
            props.setCount(enterValue)
        }
    }

    if(props.valueMaxInput <= props.valueStartInput|| props.valueStartInput < 0 ){
        props.setCount(incorrectValue)
    }
    if (
        props.valueMaxInput > 0 &&
        props.valueStartInput > 0 &&
        props.valueMaxInput > props.valueStartInput
    ) {
        props.setCount(enterValue);
    }

    const saveOnExitFromInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
        if (e.target.name==='start value:'){
            props.setIntermediateValueStartInput(Number(e.target.value))
        }
        props.setIsClickedButtonSet(true)
    }



    const conditionOne = (valueInput) < 0
    const conditionTwo = props.valueMaxInput <=  props.valueStartInput



    const wrapperClass = conditionOne||conditionTwo?s.errorInput:''



    return (
        <div className={s.counter}>
            <span>{props.title}</span>
            <input
                className={wrapperClass}
                type="number" name={props.title} value={valueInput} onChange={onChangeHandler}
                onBlur={saveOnExitFromInput}
            />
        </div>
    );
};