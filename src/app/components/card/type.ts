import { FunctionComponent } from "react";
import { BarComponent } from "../bar/type";

type CardProps = {
    name: string,
    size: number,
    dataSource: string,
    valueOptions: string[],
    Content: React.ComponentType| BarComponent | null;
}

export type CardComponent = FunctionComponent<CardProps>