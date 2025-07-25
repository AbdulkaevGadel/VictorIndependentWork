import {CounterMainPanel} from "../counterMainPanel/CounterMainPanel.tsx";
import {CounterActions} from "../counterActions/CounterActions.tsx";
import {Button} from "../button/Button.tsx";
import {CounterSettingsField} from "../counterSettingsField/CounterSettingsField.tsx";
import s from "./SettingCounter.module.scss"
import type {Dispatch, SetStateAction} from "react";
import type {CountSettingsType} from "../../App.tsx";

type SettingCounterPropsType = {
    count: number
    maxValue: number
    startValue: number
    setCountSettings: Dispatch<SetStateAction<CountSettingsType>>
}


export const SettingCounter = (props: SettingCounterPropsType) => {

    const saveCounterSettings = () => {

    }

    const onChangeHandlerMaxValue = (value:number) => {
        console.log(1)
        console.log(value)
        props.setCountSettings(prev => ({
            ...prev,
            maxValue: value
        }));
    }
    const onChangeHandlerStartValue = (value:number) =>{

        props.setCountSettings(prev => ({
            ...prev,
            startValue: value
        }));
    }


    return (
        <div className={s.settingCounter}>
            <CounterMainPanel>
                <CounterSettingsField onChangeHandlerValue={() => {
                    onChangeHandlerMaxValue(props.maxValue)
                }} valueInput={props.maxValue} title={'max value:'}/>
                <CounterSettingsField onChangeHandlerValue={() => {
                    onChangeHandlerStartValue(props.startValue)
                }} valueInput={props.startValue} title={'start value: '}/>
            </CounterMainPanel>
            <CounterActions>
                <Button title={'set'} onClick={saveCounterSettings} disabled={props.count > 4}/>
            </CounterActions>
        </div>
    );
};
