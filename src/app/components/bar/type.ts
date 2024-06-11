import { FunctionComponent } from "react";

type BarProp = {
    xName: string,
    yName: string,
    xValues: number[],
    yValues: number[],
}

export type BarComponent = FunctionComponent<BarProp>