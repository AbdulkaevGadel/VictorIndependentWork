import {useState} from 'react'
import s from './App.module.scss'
import {Button} from "./components/button/Button.tsx";
import {CounterActions} from "./components/counterActions/CounterActions.tsx";
import {CounterMainPanel} from "./components/counterMainPanel/CounterMainPanel.tsx";
import {CountContent} from "./components/countContent/CountContent.tsx";

type CountSettingsType = {
    maxValue: number
    startValue: number

}

function App() {
    const [count, setCount] = useState(0)
    const [countSettings, setcountSettings] = useState<CountSettingsType>({
        maxValue:4,
        startValue:0
    })

    const handleIncrement = () => {
        setCount(count => count + 1)
    }

    const resetCounter = () => {
        setCount(0)
    }





    return (
        <>
            <div className={s.counter}>
                <CounterMainPanel>
                    <CountContent count={count} maxValue={countSettings.maxValue}/>
                </CounterMainPanel>
                {/*<div className={s.main}>*/}
                {/*    <span className={count > countSettings.maxValue ? s.maxCount : ''}>{count}</span>*/}
                {/*</div>*/}
                <CounterActions>
                    <Button count={count} title={'inc'} onClick={handleIncrement} disabled={count > 4}/>
                    <Button title={'reset'} onClick={resetCounter} disabled={count == 0}/>
                </CounterActions>
            </div>
        </>
    )
}

export default App
