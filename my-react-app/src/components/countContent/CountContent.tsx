import s from "./CountContent.module.scss";
import type {PropsCountContent} from "./countContentTypes.ts";




export const CountContent = (props: PropsCountContent) => {

    const wrapperClass = Number(props.count) > props.maxValue - 1 || props.count === 'Incorrect value!' ? s.maxCount : s.normal

    return (
        <span className={wrapperClass}>{props.count}</span>
    );
};
