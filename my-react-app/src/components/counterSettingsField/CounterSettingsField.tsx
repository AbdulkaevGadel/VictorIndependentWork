
type CounterSettingsFieldPropsType = {
    title:string

}


export const CounterSettingsField = (props:CounterSettingsFieldPropsType) => {
    return (
        <div>
            <span>{props.title}</span>
            <select></select>
        </div>
    );
};