import s from './Button.module.scss'


type PropsButton = {
    count?:string
    title: string
    onClick: (count?: number) => void
    disabled: boolean

}


export const Button = (props: PropsButton) => {
    return (
        <button className={s.b}
                onClick={() => {
                    props.onClick()
                }}
                disabled={props.disabled}>
            {props.title}
        </button>
    );
};
