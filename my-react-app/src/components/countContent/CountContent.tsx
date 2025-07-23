import s from "./CountContent.module.scss";

type PropsCountContent = {
    count:number
    maxValue:number
}


export const CountContent = (props:PropsCountContent) => {
    return (
        <span className={props.count > props.maxValue ? s.maxCount : s.normal}>{props.count}</span>
    );
};
