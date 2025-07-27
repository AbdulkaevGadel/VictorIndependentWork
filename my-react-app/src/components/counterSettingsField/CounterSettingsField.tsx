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
    flagDisabledButton:boolean
    intermediateValueStartInput:number
    setIntermediateValueStartInput:Dispatch<SetStateAction<number>>
    // onChangeHandlerValue: (value: number) => void,
}


export const CounterSettingsField = (props: CounterSettingsFieldPropsType) => {

    const [valueInput,setValueInput]=useState(props.valueInput)

    const incorrectValue:string='Incorrect value!'

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(Number(e.target.value) >0){
            props.setFlagDisabledButton(false)

        }
        if(0<=props.intermediateValueStartInput){
            props.setFlagDisabledButton(false)
        }
        if((Number(e.target.value)<0)||props.intermediateValueStartInput<0){
            props.setFlagDisabledButton(true)
            props.setCount(incorrectValue)
        }
        if(e.target.name==='max value:'){
            setValueInput(Number(e.target.value))
            props.setValueMaxInput?.(Number(e.target.value))


        }
        if(e.target.name==='start value:'){
            setValueInput(Number(e.target.value))
            props.setValueStartInput?.(Number(e.target.value))
            if(0<=(Number(e.target.value))){
                props.setIntermediateValueStartInput(Number(e.target.value))
                props.setFlagDisabledButton(false)
            }
        }
        if(e.target.name==='max value:' && props.intermediateValueStartInput <0 ){
            props.setFlagDisabledButton(true)
            props.setCount(incorrectValue)
        }
        if( props.valueMaxInput <= props.valueStartInput){
            props.setCount(incorrectValue)
        }



    }

    console.log(props.valueMaxInput)
    console.log(props.valueStartInput)

    if(props.valueMaxInput <= props.valueStartInput){
        console.log('srabotalo')
        props.setCount(incorrectValue)
    }

    const saveOnExitFromInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
        if (e.target.name==='start value:'){
            props.setIntermediateValueStartInput(Number(e.target.value))
        }
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