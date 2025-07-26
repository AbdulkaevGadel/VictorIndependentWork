import s from "./CountContent.module.scss";

type PropsCountContent = {
    count:string
    maxValue:number
}


export const CountContent = (props:PropsCountContent) => {
    return (
        <span className={Number(props.count) > props.maxValue -1 ? s.maxCount : s.normal}>{props.count}</span>
    );
};
