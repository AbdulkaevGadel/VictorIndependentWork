import type {Dispatch, SetStateAction} from "react";
import s from "./Counter.module.scss"
import {CounterMainPanel} from "../counterMainPanel/CounterMainPanel.tsx";
import {CountContent} from "../countContent/CountContent.tsx";
import {CounterActions} from "../counterActions/CounterActions.tsx";
import {Button} from "../button/Button.tsx";


type CounterMainPanelProps = {
    count: string
    maxValue: number
    startValue: number
    setCount: Dispatch<SetStateAction<string>>
    isClickedButtonSet:boolean
}

export const Counter = (props: CounterMainPanelProps) => {

    const handleIncrement = () => {
        const newCount= Number(props.count) + 1;
        props.setCount( String(newCount))
    }

    const resetCounter = () => {
        props.setCount(String(props.startValue))
    }


    return (
        <div className={s.counter}>
            <CounterMainPanel>
                <CountContent count={props.count} maxValue={props.maxValue}/>
            </CounterMainPanel>
            <CounterActions>
                <Button count={props.count} title={'inc'} onClick={handleIncrement}
                        disabled={Number(props.count )> props.maxValue - 1 ||props.isClickedButtonSet}/>
                <Button title={'reset'} onClick={resetCounter} disabled={Number(props.count) === 0||props.isClickedButtonSet}/>
            </CounterActions>
        </div>
    );
};