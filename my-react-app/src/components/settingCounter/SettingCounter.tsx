import {CounterMainPanel} from "../counterMainPanel/CounterMainPanel.tsx";
import {CounterActions} from "../counterActions/CounterActions.tsx";
import {Button} from "../button/Button.tsx";
import {CounterSettingsField} from "../counterSettingsField/CounterSettingsField.tsx";
import s from "./SettingCounter.module.scss"

type SettingCounterPropsType = {
    count:number
    maxValue: number
    startValue: number
}


export const SettingCounter = (props:SettingCounterPropsType) => {

   const saveCounterSettings = () =>{

   }

    return (
        <div className={s.settingCounter}>
            <CounterMainPanel>
                <CounterSettingsField title={'max value:'}/>
                <CounterSettingsField title={'start value: '}/>
            </CounterMainPanel>
            <CounterActions>
                <Button  title={'set'} onClick={saveCounterSettings} disabled={props.count > 4}/>
            </CounterActions>
        </div>
    );
};
