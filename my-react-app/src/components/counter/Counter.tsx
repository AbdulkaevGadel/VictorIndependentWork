import s from "./Counter.module.scss"
import {CounterMainPanel} from "../counterMainPanel/CounterMainPanel.tsx";
import {CountContent} from "../countContent/CountContent.tsx";
import {CounterActions} from "../counterActions/CounterActions.tsx";
import {Button} from "../button/Button.tsx";
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {selectCount, selectFlagDisabledButton} from "../../store/selectors/selectorsCounterValue.ts";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import {setCountAC} from "../../store/reducers/counter-reducer.ts";


type CounterMainPanelProps = {
    maxValue: number
    startValue: number
}

export const Counter = (props: CounterMainPanelProps) => {

    const count = useAppSelector(selectCount)
    const flagDisabledButton = useAppSelector(selectFlagDisabledButton)
    const dispatch = useAppDispatch()

    const handleIncrement = () => {
        const newCount = Number(count) + 1;
        dispatch(setCountAC(String(newCount)))
    }

    const resetCounter = () => {
        dispatch(setCountAC(String(props.startValue)))
    }

    const conditionForDisabledInc = Number(count) > props.maxValue - 1 || flagDisabledButton || isNaN(Number(count))
    const conditionForDisabledReset = Number(count) === props.startValue || flagDisabledButton || isNaN(Number(count))


    return (
        <div className={s.counter}>
            <CounterMainPanel>
                <CountContent count={count} maxValue={props.maxValue}/>
            </CounterMainPanel>
            <CounterActions>
                <Button title={'inc'}
                        onClick={handleIncrement}
                        disabled={conditionForDisabledInc}/>
                <Button title={'reset'} onClick={resetCounter}
                        disabled={conditionForDisabledReset}/>
            </CounterActions>
        </div>
    );
};