import {CounterMainPanel} from "../counterMainPanel/CounterMainPanel.tsx";
import {CounterActions} from "../counterActions/CounterActions.tsx";
import {Button} from "../button/Button.tsx";
import {CounterSettingsField} from "../counterSettingsField/CounterSettingsField.tsx";
import s from "./SettingCounter.module.scss"
import React, {type Dispatch, type SetStateAction, useLayoutEffect, useState} from "react";
import type {CountSettingsType} from "../../App.tsx";

type SettingCounterPropsType = {
    count: string
    maxValue: number
    startValue: number
    setCountSettings: Dispatch<SetStateAction<CountSettingsType>>
    setCount: Dispatch<SetStateAction<string>>
    isClickedButtonSet:boolean
    setIsClickedButtonSet:Dispatch<SetStateAction<boolean>>
}


export const SettingCounter = (props: SettingCounterPropsType) => {

    const [valueMaxInput,setValueMaxInput]=useState(props.maxValue)
    const [valueStartInput,setValueStartInput]=useState(props.startValue)
    const [flagDisabledButton,setFlagDisabledButton]=useState(false)

    const saveCounterSettings = () => {
        props.setCountSettings(prev => ({
            ...prev,
            maxValue: valueMaxInput,
            startValue:valueStartInput
        }));
        props.setCount(String(valueStartInput))
    }

    useLayoutEffect(() => {
        if(valueMaxInput <= valueStartInput){
            setFlagDisabledButton(true)
        }
    }, [valueMaxInput, valueStartInput]);



    console.log(flagDisabledButton, valueMaxInput <= valueStartInput)

    const onChangeHandlerMaxValue = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(Number(e.target.value) <= 0 ){
            setFlagDisabledButton(true)
        }
        else setFlagDisabledButton(false)
    }

    const onChangeHandlerStartValue = (e:React.ChangeEvent<HTMLInputElement>) =>{
        if(Number(e.target.value) <0) {
            setFlagDisabledButton(true)
        }
        else setFlagDisabledButton(false)
    }

    return (
        <div className={s.settingCounter}>
            <CounterMainPanel>
                <CounterSettingsField valueInput={valueMaxInput} setValueMaxInput={setValueMaxInput}
                                      valueStartInput={valueStartInput} valueMaxInput={valueMaxInput}
                                      maxValue={props.maxValue} setCount={props.setCount}
                                      startValue={props.startValue} flagDisabledButton={flagDisabledButton}
                                      setFlagDisabledButton={setFlagDisabledButton}
                                      onChangeHandlerMaxValue ={onChangeHandlerMaxValue}
                                      title={'max value:'}
                                      setIsClickedButtonSet={props.setIsClickedButtonSet}/>
                <CounterSettingsField valueInput={valueStartInput} setValueStartInput={setValueStartInput} valueStartInput={valueStartInput}
                                      valueMaxInput={valueMaxInput} startValue={props.startValue} flagDisabledButton={flagDisabledButton}
                                      setFlagDisabledButton={setFlagDisabledButton} setCount={props.setCount} count={props.count}
                                      onChangeHandlerStartValue={onChangeHandlerStartValue}
                                      title={'start value:'}
                                      setIsClickedButtonSet={props.setIsClickedButtonSet}/>
            </CounterMainPanel>
            <CounterActions>
                <Button isClickedButtonSet={props.isClickedButtonSet} setIsClickedButtonSet={props.setIsClickedButtonSet}
                        title={'set'} onClick={saveCounterSettings}
                        disabled={flagDisabledButton || valueMaxInput <= valueStartInput}
                        setCount={props.setCount} valueStartInput={valueStartInput}/>
            </CounterActions>
        </div>
    );
};
