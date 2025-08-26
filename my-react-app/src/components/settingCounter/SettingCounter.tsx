import {CounterMainPanel} from "../counterMainPanel/CounterMainPanel.tsx";
import {CounterActions} from "../counterActions/CounterActions.tsx";
import {Button} from "../button/Button.tsx";
import {CounterSettingsField} from "../counterSettingsField/CounterSettingsField.tsx";
import s from "./SettingCounter.module.scss"
import React, {type Dispatch, type SetStateAction, useLayoutEffect} from "react";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import {
    setCountAC,
    setFlagDisabledButtonAC,
    setMaxValueAC,
    setStartValueAC
} from "../../store/reducers/counter-reducer.ts";
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {selectFlagDisabledButton} from "../../store/selectors/selectorsCounterValue.ts";
import type {CountSettingsType} from "../../customHooks/useLocalStorage.ts";

type SettingCounterPropsType = {
    maxValue: number
    startValue: number
    // setCountSettings: Dispatch<SetStateAction<CountSettingsType>>
}


export const SettingCounter = (props: SettingCounterPropsType) => {

    const flagDisabledButton = useAppSelector(selectFlagDisabledButton)

    const dispatch = useAppDispatch()
    // вызови селектор здесь и ориентируйся на
    console.log("settingCounter", props.maxValue)

    const incorrectValue: string = 'Incorrect value!'
    const enterValue: string = 'Enter value and press "set"'

    const conditionDisabledButton = flagDisabledButton || props.maxValue <= props.startValue

    const conditionOne = (props.maxValue) < 0 || (props.startValue) < 0
    const conditionTwo = props.maxValue <= props.startValue

    const wrapperClass = conditionOne || conditionTwo ? s.errorInput : ''


    const saveCounterSettings = () => {
        console.log(props.maxValue)
        console.log(props.startValue)
        dispatch(setMaxValueAC(props.maxValue))
        dispatch(setStartValueAC(props.startValue))
        // props.setCountSettings(prevState => ({ ...prevState, maxValue: props.maxValue, startValue: props.startValue }))
        dispatch(setCountAC(String(props.startValue)))
    }
    console.log(props.startValue + 'mne')

    useLayoutEffect(() => {

        if (props.maxValue <= props.startValue || props.startValue < 0) {
            dispatch(setFlagDisabledButtonAC(true))
            dispatch(setCountAC(incorrectValue))
        } else dispatch(setFlagDisabledButtonAC(false))
          // dispatch(setCountAC(String(props.startValue)))
    }, [props.maxValue, props.startValue]);


    // console.log(props.flagDisabledButton, valueMaxInput <= valueStartInput)

    const onChangeHandlerMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(Number(e.currentTarget.value)))
        if (props.maxValue <= 0) {
            dispatch(setFlagDisabledButtonAC(true))
        } else dispatch(setFlagDisabledButtonAC(false))
        dispatch(setCountAC(enterValue))
    }

    const onChangeHandlerStartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueAC(Number(e.currentTarget.value)))
        // if (props.startValue < 0) {
        //     dispatch(setFlagDisabledButtonAC(true))
        // } else dispatch(setFlagDisabledButtonAC(false))
        dispatch(setCountAC(enterValue))
    }

    const setCount = (count: string) => {
        dispatch(setCountAC(count))
    }

    const seFlagDisabledButton = (flag: boolean) => {
        dispatch(setFlagDisabledButtonAC(flag))
    }

    // useLayoutEffect(() => {
    //
    // }, [props.startValue]);

    return (
        <div className={s.settingCounter}>
            <CounterMainPanel>
                <CounterSettingsField valueInput={props.maxValue}
                                      onChangeHandlerMaxValue={onChangeHandlerMaxValue}
                                      wrapperClass={wrapperClass}
                                      title={'max value:'}/>
                <CounterSettingsField valueInput={props.startValue}
                                      onChangeHandlerStartValue={onChangeHandlerStartValue}
                                      wrapperClass={wrapperClass}
                                      title={'start value:'}/>
            </CounterMainPanel>
            <CounterActions>
                <Button seFlagDisabledButton={seFlagDisabledButton}
                        title={'set'} onClick={saveCounterSettings}
                        disabled={conditionDisabledButton}
                        setCount={setCount} startValue={props.startValue}/>
            </CounterActions>
        </div>
    );
};
