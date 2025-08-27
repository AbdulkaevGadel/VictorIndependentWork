export type PropsButton = {
    title: string
    onClick: (count?: number) => void
    disabled: boolean
    seFlagDisabledButton?: (flag: boolean) => void
    setCount?: (count: string) => void
    startValue?: number
}