import { CardComponent } from "./type";

export const Card: CardComponent = ({name, size, dataSource, valueOptions, Content}) => {
    return (
        <div className={`flex flex-col card m-2 rounded-xl 
            ${ size === 0 ? `w-64 h-64` :
                size === 1 ? `w-64 h-96` :
                size === 2 ? `w-96 h-64` :
                `w-96 h-96`} `}
        >
            {/* Card header */}
            <div className="flex flex-row justify-between">
                <h2 className="mt-2 ml-3">{name}</h2>
                <div className="inline-block relative">
                    <select className="mr-2 mt-2 block appearance-none w-11/12 bg-slate-200/30 border-none px-3 py-1 pr-6 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option className="p">{dataSource}</option>
                        {valueOptions.map((vo, index)=> (
                            <option key={vo + "" + index}>{vo}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                        <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
                    </div>
                </div>
            </div>

            { Content && <Content xName={"Date"} yName={"Rainfall"} xValues={[0,1,2,3,4,5]} yValues={[0,37,14,26,12,0]}/>}
        </div>
    )
}