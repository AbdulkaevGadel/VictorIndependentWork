import s from './Button.module.scss'


type PropsButton = {
    title: string
    onClick: (count?: number) => void
    disabled: boolean
    seFlagDisabledButton?: (flag: boolean) => void
    setCount?: (count: string) => void
    startValue?: number
}


export const Button = (props: PropsButton) => {

    const onClickHandler = () => {
        props.onClick()
        props.seFlagDisabledButton?.(false)
        props.setCount?.(String(props.startValue))
    }

    return (
        <button className={s.b}
                onClick={onClickHandler}
                disabled={props.disabled}>
            {props.title}
        </button>
    );
};
