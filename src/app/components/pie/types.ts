import { FunctionComponent } from "react"

type PieProps = {
    name: string,
    stream: string,
    palette: string,
    
}

export type PieComponent = FunctionComponent<PieProps>
