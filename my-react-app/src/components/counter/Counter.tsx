import type {Dispatch, SetStateAction} from "react";
import s from "./Counter.module.scss"
import {CounterMainPanel} from "../counterMainPanel/CounterMainPanel.tsx";
import {CountContent} from "../countContent/CountContent.tsx";
import {CounterActions} from "../counterActions/CounterActions.tsx";
import {Button} from "../button/Button.tsx";


type CounterMainPanelProps = {
    count: number
    maxValue: number
    setCount: Dispatch<SetStateAction<number>>
}

export const Counter = (props: CounterMainPanelProps) => {

    const handleIncrement = () => {
        props.setCount(props.count + 1)
    }

    const resetCounter = () => {
        props.setCount(0)
    }


    return (
        <div className={s.counter}>
            <CounterMainPanel>
                <CountContent count={props.count} maxValue={props.maxValue}/>
            </CounterMainPanel>
            <CounterActions>
                <Button count={props.count} title={'inc'} onClick={handleIncrement} disabled={props.count > 4}/>
                <Button title={'reset'} onClick={resetCounter} disabled={props.count == 0}/>
            </CounterActions>
        </div>
    );
};