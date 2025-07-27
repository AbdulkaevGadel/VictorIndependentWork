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
    const [flagDisabledButton,setFlagDisabledButton]=useState(false)
    const [v1,setV1]=useState(0)

    const saveCounterSettings = () => {
        props.setCountSettings(prev => ({
            ...prev,
            maxValue: valueMaxInput,
            startValue:valueStartInput
        }));
        props.setCount(String(valueStartInput))
    }


    // console.log(flagDisabledButton)
    // console.log(` это стэйт ${props.maxValue}`)
    // console.log(`valueMAx: ${valueMaxInput} valueStart: ${valueStartInput}`)
    return (
        <div className={s.settingCounter}>
            <CounterMainPanel>
                <CounterSettingsField valueInput={valueMaxInput} setValueMaxInput={setValueMaxInput} valueStartInput={valueStartInput}
                                      valueMaxInput={valueMaxInput} maxValue={props.maxValue} setCount={props.setCount}
                                      startValue={props.startValue} flagDisabledButton={flagDisabledButton} setFlagDisabledButton={setFlagDisabledButton}
                                      v1={v1} setV1={setV1} title={'max value:'}/>
                <CounterSettingsField valueInput={valueStartInput} setValueStartInput={setValueStartInput} valueStartInput={valueStartInput}
                                      valueMaxInput={valueMaxInput} startValue={props.startValue} flagDisabledButton={flagDisabledButton}
                                      setFlagDisabledButton={setFlagDisabledButton} setCount={props.setCount}
                                      v1={v1} setV1={setV1} title={'start value:'} />
            </CounterMainPanel>
            <CounterActions>
                <Button title={'set'} onClick={saveCounterSettings} disabled={flagDisabledButton || valueMaxInput <= valueStartInput} />
            </CounterActions>
        </div>
    );
};
