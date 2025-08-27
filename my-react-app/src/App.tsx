import {Counter} from "./components/counter/Counter.tsx";
import {SettingCounter} from "./components/settingCounter/SettingCounter.tsx";
import s from "./App.module.scss"
import {useAppSelector} from "./common/customHooks/useAppSelector.ts";
import {selectMaxValue, selectStartValue} from "./store/selectors/selectorsCounterValue.ts";


function App() {


    const maxValue = useAppSelector(selectMaxValue)
    const startValue = useAppSelector(selectStartValue)


    return (
        <div className={s.appMain}>
            <SettingCounter
                maxValue={maxValue}
                startValue={startValue}
            />
            <Counter
                maxValue={maxValue}
                startValue={startValue}/>
        </div>
    )
}

export default App

