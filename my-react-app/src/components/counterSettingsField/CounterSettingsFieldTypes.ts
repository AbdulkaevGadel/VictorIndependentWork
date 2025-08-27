import React from "react";

export type CounterSettingsFieldPropsType = {
    title: string,
    valueInput: number
    onChangeHandlerStartValue?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerMaxValue?: (e: React.ChangeEvent<HTMLInputElement>) => void
    wrapperClass: string
}