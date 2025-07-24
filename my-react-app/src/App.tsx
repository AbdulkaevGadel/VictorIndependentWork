import {useState} from 'react'
import {Counter} from "./components/counter/Counter.tsx";
import {SettingCounter} from "./components/settingCounter/SettingCounter.tsx";
import s from "./App.module.scss"

type CountSettingsType = {
    maxValue: number
    startValue: number

}

function App() {
    const [count, setCount] = useState(0)
    const [countSettings, setcountSettings] = useState<CountSettingsType>({
        maxValue: 4,
        startValue: 0
    })


    return (
        <div className={s.appMain}>
            <SettingCounter count={count} maxValue={countSettings.maxValue} startValue={countSettings.startValue}/>
            <Counter count={count} setCount={setCount} maxValue={countSettings.maxValue}/>
        </div>
    )
}

export default App
