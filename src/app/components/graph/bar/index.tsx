import { Card } from "../../card"
import { CardComponent } from "../../card/type"
import { BarComponent } from "./type"

const Bars: BarComponent = ({xName, yName, xValues, yValues}) => {
    const maxY = Math.max(...yValues)
    return (
        <div className="flex flex-row h-full w-full">
            <div className="flex basis-1/12 items-center w-full h-full">
                <p className="text-center transform -rotate-90">{yName}</p>
            </div>
            
            <div className="flex flex-col justify-end basis-11/12">
                {/* BarSpace */}
                <div className="flex flex-row h-full max-h-60 w-full text-align-center justify-between items-end pr-4">
                    {yValues.map((y,index)=> (
                        <div 
                            key={index}
                            className="flex flex-col justify-end flex-1 w-full h-full mx-1"
                        >    
                            <div 
                                className="w-full bg-violet-800/50 hover:bg-violet-800/80 rounded-lg"
                                style={{ height: `calc(${(y / maxY) * 100}% - 2px)` }}
                            />
                            <p className="text-center">{xValues[index]}</p>
                        </div>
                    ))}
                </div>
                <p className="text-center mb-2">{xName}</p>
            </div>
            
        </div>
    )
}


export const Bar: CardComponent = ({name, size, dataSource, valueOptions, Content}) => (
    <Card name={name} size={size} dataSource={dataSource} valueOptions={valueOptions} Content={Bars}/>
)
    