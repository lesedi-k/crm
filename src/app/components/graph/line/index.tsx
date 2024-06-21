'use client'
import React, {useState} from 'react';
import { format } from 'date-fns';
import Slider from "../../functional/slider";

/* Data sources */
import accounts from "../../../JSON/plaid_accounts.json"
import transactions from "../../../JSON/gpt_transactions.json"

const Line = () => {
    const [scope, setScope] = useState<string>("Month")
    const xy = transactions.transactions.map((t) => ({x: t.date, y: t.amount}))
    const [ts, setTS] = useState<{x: string, y: number}[]>(xy.slice(- 20))

    function changeScope(s: string) {        
        let range = 0;
        setScope(s);
        if (s === "Day") {
            range = 2;
        } else if (s == "Week") {
            range = 10;
        } else if (s == "Month") {
            range = 20;
        } else if (s == "Year") {  
            range = 0
        }  


        setTS(xy.slice(- range))

    }

    function generatePath (coords: {x: string, y: number}[]) {
        const maxY = Math.max(...coords.map(coord => coord.y));
        const roundedMax = Math.ceil(maxY / 700) * 700;
        const scalar = 150;
        const inc = 600 / (coords.length - 1);
        const y = (value: number) => (scalar - (value / roundedMax) * scalar);

        let d = `M 0 ${y(coords[0].y)}`;
        
        for (let i = 1; i < coords.length; i++) {
            const midX = (inc * (i - 0.5));
            const midY = y(coords[i - 1].y);
            const endX = (inc * i);
            const endY = y(coords[i].y);
    
            d += ` S ${midX} ${midY}, ${endX} ${endY}`;
        }
        return d;
    }

    return (
        <>
            <Slider options={["Year", "Month", "Week", "Day"]} selected={scope} setSelected={(newScope) => changeScope(newScope)}/>
                        
            <div className="flex h-full w-full flex-row items-center">                
                <div className="flex h-full w-full flex-col items-center">
                    <div className="flex h-full w-full border-b border-l border-slate-400 overflow">
                        <svg className="flex h-full w-full items-end">
                            <defs>
                                <linearGradient id="GraphGrad" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stop-color="rgb(50, 141, 168)" stop-opacity="0.5"/>
                                    <stop offset="50%" stop-color="rgb(50, 141, 168)" stop-opacity="0" />
                                    <stop offset="100%" stop-color="blue" stop-opacity="0"/>
                                </linearGradient>
                            </defs>   
                            <path
                                stroke="white"
                                // fill="url(#GraphGrad)"
                                fill="none"
                                stroke-width={1}
                                stroke-linecap="round"
                                d={generatePath(ts)}
                            />  
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Line;