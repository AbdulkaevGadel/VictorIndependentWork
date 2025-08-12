import s from './Button.module.scss'
import type {Dispatch, SetStateAction} from "react";


type PropsButton = {
    title: string
    onClick: (count?: number) => void
    disabled: boolean
    setIsClickedButtonSet?: Dispatch<SetStateAction<boolean>>
    setCount?: Dispatch<SetStateAction<string>>
    valueStartInput?: number
}


export const Button = (props: PropsButton) => {

    const onClickHandler = () => {
        props.onClick()
        props.setIsClickedButtonSet?.(false)
        props.setCount?.(String(props.valueStartInput))
    }

    return (
        <button className={s.b}
                onClick={onClickHandler}
                disabled={props.disabled}>
            {props.title}
        </button>
    );
};
