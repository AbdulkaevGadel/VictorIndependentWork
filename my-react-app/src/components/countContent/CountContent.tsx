import s from "./CountContent.module.scss";

type PropsCountContent = {
    count: string
    maxValue: number
}


export const CountContent = (props: PropsCountContent) => {

    const wrapperClass = Number(props.count) > props.maxValue - 1 || props.count === 'Incorrect value!' ? s.maxCount : s.normal

    return (
        <span className={wrapperClass}>{props.count}</span>
    );
};
