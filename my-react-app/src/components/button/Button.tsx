import s from './Button.module.scss'


type PropsButton = {
    count?: number
    title: string
    onClick: (count?: number) => void
    disabled: boolean

}


export const Button = (props: PropsButton) => {
    return (
        <button className={s.b}
                onClick={() => {
                    props.onClick(props.count)
                }}
                disabled={props.count===undefined?false : props.disabled}>
            {props.title}
        </button>
    );
};
