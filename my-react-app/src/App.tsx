import {useState} from 'react'
import s from './App.module.scss'
import {Button} from "./components/button/Button.tsx";

function App() {
    const [count, setCount] = useState(0)

    const handleIncrement = ()=>{
        setCount(count=>count+1)
    }

    const resetCounter = ()=>{
        setCount(0)
    }

    return (
        <>
            <div className={s.counter}>
                <div className={s.main}>
                    <span className={count > 4 ? s.maxCount:''}>{count}</span>
                </div>
            <div className={s.wrapper_button}>
                <Button count={count} title={'inc'} onClick={handleIncrement} disabled={count>4}/>
                <Button title={'reset'} onClick={resetCounter} disabled={count==0}/>
            </div>
            </div>
        </>
    )
}

export default App
