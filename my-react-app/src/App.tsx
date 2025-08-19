import {useLayoutEffect, useState} from 'react'
import {Counter} from "./components/counter/Counter.tsx";
import {SettingCounter} from "./components/settingCounter/SettingCounter.tsx";
import s from "./App.module.scss"
import {useLocalStorage} from "./customHooks/useLocalStorage.ts";

export type CountSettingsType = {
    maxValue: number
    startValue: number

}

function App() {
    const [count, setCount] = useState('0')
    const [countSettings, setCountSettings] = useLocalStorage<CountSettingsType>('counterSettings', {
        maxValue: 4,
        startValue: 0
    })
    const [flagDisabledButton, seFlagDisabledButton] = useState(false)

    useLayoutEffect(() => {
        setCount(String(countSettings.startValue))
    }, [countSettings.startValue]);


    return (
        <div className={s.appMain}>
            <SettingCounter setCountSettings={setCountSettings}
                            setCount={setCount}
                            maxValue={countSettings.maxValue}
                            startValue={countSettings.startValue}
                            flagDisabledButton={flagDisabledButton}
                            seFlagDisabledButton={seFlagDisabledButton}/>
            <Counter count={count}
                     setCount={setCount}
                     maxValue={countSettings.maxValue}
                     startValue={countSettings.startValue}
                     flagDisabledButton={flagDisabledButton}/>
        </div>
    )
}

export default App

