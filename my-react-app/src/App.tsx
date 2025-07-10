import {useState} from 'react'
import s from './App.module.scss'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className={s.counter}>
                <div className={s.main}>
                    <span className={count > 4 ? s.maxCount:''}>{count}</span>
                </div>
            <div className={s.wrapper_button}>
                <button onClick={() => setCount((count) => count + 1)}
                 disabled={count >4 }
                >
                    inc
                </button>
                <button onClick={() =>setCount(0)} disabled={count==0}>reset</button>
            </div>
            </div>
        </>
    )
}

export default App
