import s from './Button.module.scss'
import type {PropsButton} from "./buttonTypes.ts";


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
