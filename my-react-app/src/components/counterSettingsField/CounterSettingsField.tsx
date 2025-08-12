import s from "./CounterSettingsField.module.scss"
import React, {type Dispatch, type SetStateAction, useLayoutEffect} from "react";

type CounterSettingsFieldPropsType = {
    title: string,
    valueInput: number
    maxValue?: number
    startValue: number
    setValueMaxInput?: Dispatch<SetStateAction<number>>
    valueMaxInput: number
    valueStartInput: number
    setValueStartInput?: Dispatch<SetStateAction<number>>
    setFlagDisabledButton: Dispatch<SetStateAction<boolean>>
    setCount: Dispatch<SetStateAction<string>>
    count?: string
    flagDisabledButton: boolean
    intermediateValueStartInput?: number
    setIntermediateValueStartInput?: Dispatch<SetStateAction<number>>
    setIsClickedButtonSet: Dispatch<SetStateAction<boolean>>
    onChangeHandlerStartValue?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerMaxValue?: (e: React.ChangeEvent<HTMLInputElement>) => void
}


export const CounterSettingsField = (props: CounterSettingsFieldPropsType) => {

    // const [valueInput, setValueInput] = useState(props.valueInput)

    const incorrectValue: string = 'Incorrect value!'
    const enterValue: string = 'Enter value and press "set"'

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (e.target.name === 'max value:') {
            props.setValueMaxInput?.(Number(e.target.value))
            props.onChangeHandlerMaxValue?.(e)
        }

        if (e.target.name === 'start value:') {
            props.setValueStartInput?.(Number(e.target.value))
            props.onChangeHandlerStartValue?.(e)
        }

    }




    useLayoutEffect(() => {
        if (props.valueMaxInput <= props.valueStartInput || props.valueStartInput < 0) {
            props.setCount(incorrectValue)
        }
    }, [props.valueMaxInput, props.valueStartInput, props.valueStartInput]);

    // console.log(props.valueStartInput)

    const saveOnExitFromInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'start value:') {
            //  props.setIntermediateValueStartInput(Number(e.target.value))
        }
        props.setIsClickedButtonSet(true)
    }

    const conditionOne = (props.valueMaxInput) < 0 || (props.valueStartInput) <0
    const conditionTwo = props.valueMaxInput <= props.valueStartInput

    const wrapperClass = conditionOne || conditionTwo ? s.errorInput : ''


    return (
        <div className={s.counter}>
            <span>{props.title}</span>
            <input
                className={wrapperClass}
                type="number" name={props.title} value={props.valueInput} onChange={onChangeHandler}
                onBlur={saveOnExitFromInput}
            />
        </div>
    );
};