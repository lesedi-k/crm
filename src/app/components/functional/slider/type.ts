import { FunctionComponent } from "react";

type SliderProp = {
    options: string[];
    selected: string;
    setSelected: (arg0 : string) => void
};

export type SliderComponent = FunctionComponent<SliderProp>