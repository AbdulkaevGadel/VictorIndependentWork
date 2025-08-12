import {CounterMainPanel} from "../counterMainPanel/CounterMainPanel.tsx";
import {CounterActions} from "../counterActions/CounterActions.tsx";
import {Button} from "../button/Button.tsx";
import {CounterSettingsField} from "../counterSettingsField/CounterSettingsField.tsx";
import s from "./SettingCounter.module.scss"
import React, {type Dispatch, type SetStateAction, useLayoutEffect, useState} from "react";
import type {CountSettingsType} from "../../App.tsx";

type SettingCounterPropsType = {
    maxValue: number
    startValue: number
    setCountSettings: Dispatch<SetStateAction<CountSettingsType>>
    setCount: Dispatch<SetStateAction<string>>
    isClickedButtonSet: boolean
    setIsClickedButtonSet: Dispatch<SetStateAction<boolean>>
}


export const SettingCounter = (props: SettingCounterPropsType) => {

    const [valueMaxInput, setValueMaxInput] = useState(props.maxValue)
    const [valueStartInput, setValueStartInput] = useState(props.startValue)
    const [flagDisabledButton, setFlagDisabledButton] = useState(false)

    const incorrectValue: string = 'Incorrect value!'
    const enterValue: string = 'Enter value and press "set"'

    const conditionOne = (valueMaxInput) < 0 || (valueStartInput) < 0
    const conditionTwo = valueMaxInput <= valueStartInput

    const wrapperClass = conditionOne || conditionTwo ? s.errorInput : ''


    const saveCounterSettings = () => {
        props.setCountSettings(prev => ({
            ...prev,
            maxValue: valueMaxInput,
            startValue: valueStartInput
        }));
        props.setCount(String(valueStartInput))
    }

    useLayoutEffect(() => {
        if (valueMaxInput <= valueStartInput || valueStartInput < 0) {
            setFlagDisabledButton(true)
            props.setCount(incorrectValue)
        }
    }, [valueMaxInput, valueStartInput]);


    console.log(flagDisabledButton, valueMaxInput <= valueStartInput)

    const onChangeHandlerMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) <= 0) {
            setFlagDisabledButton(true)
        } else setFlagDisabledButton(false)
        props.setCount(enterValue)
    }

    const onChangeHandlerStartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) < 0) {
            setFlagDisabledButton(true)
        } else setFlagDisabledButton(false)
        props.setCount(enterValue)
    }

    return (
        <div className={s.settingCounter}>
            <CounterMainPanel>
                <CounterSettingsField valueInput={valueMaxInput}
                                      setValueMaxInput={setValueMaxInput}
                                      onChangeHandlerMaxValue={onChangeHandlerMaxValue}
                                      wrapperClass={wrapperClass}
                                      title={'max value:'}
                                      setIsClickedButtonSet={props.setIsClickedButtonSet}/>
                <CounterSettingsField valueInput={valueStartInput}
                                      setValueStartInput={setValueStartInput}
                                      onChangeHandlerStartValue={onChangeHandlerStartValue}
                                      wrapperClass={wrapperClass}
                                      title={'start value:'}
                                      setIsClickedButtonSet={props.setIsClickedButtonSet}/>
            </CounterMainPanel>
            <CounterActions>
                <Button setIsClickedButtonSet={props.setIsClickedButtonSet}
                        title={'set'} onClick={saveCounterSettings}
                        disabled={flagDisabledButton || valueMaxInput <= valueStartInput}
                        setCount={props.setCount} valueStartInput={valueStartInput}/>
            </CounterActions>
        </div>
    );
};
