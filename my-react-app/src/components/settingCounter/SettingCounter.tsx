import {CounterMainPanel} from "../counterMainPanel/CounterMainPanel.tsx";
import {CounterActions} from "../counterActions/CounterActions.tsx";
import {Button} from "../button/Button.tsx";
import {CounterSettingsField} from "../counterSettingsField/CounterSettingsField.tsx";
import s from "./SettingCounter.module.scss"
import {type Dispatch, type SetStateAction, useState} from "react";
import type {CountSettingsType} from "../../App.tsx";

type SettingCounterPropsType = {
    count: string
    maxValue: number
    startValue: number
    setCountSettings: Dispatch<SetStateAction<CountSettingsType>>
    setCount: Dispatch<SetStateAction<string>>
}


export const SettingCounter = (props: SettingCounterPropsType) => {

    const [valueMaxInput,setValueMaxInput]=useState(props.maxValue)
    const [valueStartInput,setValueStartInput]=useState(props.startValue)

    const saveCounterSettings = () => {
        props.setCountSettings(prev => ({
            ...prev,
            maxValue: valueMaxInput,
            startValue:valueStartInput
        }));
        props.setCount(String(valueStartInput))
    }

    console.log(` это стэйт ${props.maxValue}`)

    // const onChangeHandlerMaxValue = (value:number) => {
    //     // console.log(1)
    //     // console.log(value)
    //     props.setCountSettings(prev => ({
    //         ...prev,
    //         maxValue: value
    //     }));
    // }
    // const onChangeHandlerStartValue = (value:number) =>{
    //
    //     props.setCountSettings(prev => ({
    //         ...prev,
    //         startValue: value
    //     }));
    // }

    console.log(`valueMAx: ${valueMaxInput} valueStart: ${valueStartInput}`)
    return (
        <div className={s.settingCounter}>
            <CounterMainPanel>
                <CounterSettingsField setValueMaxInput={setValueMaxInput} maxValue={props.maxValue} valueInput={props.maxValue} title={'max value:'}/>
                <CounterSettingsField setValueStartInput={setValueStartInput} startValue={props.startValue} valueInput={props.startValue} title={'start value:'}/>
            </CounterMainPanel>
            <CounterActions>
                <Button title={'set'} onClick={saveCounterSettings} disabled={false}/>
            </CounterActions>
        </div>
    );
};
