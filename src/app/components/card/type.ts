import { FunctionComponent } from "react";

type CardProps = {
    name: string,
    size: number,
    dataSource: string,
    dataOptions: string[],
    Content: React.ComponentType | null;
}

export type CardComponent = FunctionComponent<CardProps>