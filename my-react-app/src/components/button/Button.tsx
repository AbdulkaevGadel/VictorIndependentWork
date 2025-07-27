import s from './Button.module.scss'
import type {Dispatch, SetStateAction} from "react";


type PropsButton = {
    count?:string
    title: string
    onClick: (count?: number) => void
    disabled: boolean
    isClickedButtonSet?:boolean
    setIsClickedButtonSet?:Dispatch<SetStateAction<boolean>>
    setCount?:Dispatch<SetStateAction<string>>
    valueStartInput?:number
}


export const Button = (props: PropsButton) => {

    const onClickHandler = () =>{
        console.log(props.valueStartInput)
        props.onClick()
        props.setIsClickedButtonSet?.(false)
        props.setCount?.(String(props.valueStartInput))
    }

    // console.log(props.count)

    return (
        <button className={s.b}
                onClick={onClickHandler}
                disabled={props.disabled}>
            {props.title}
        </button>
    );
};
