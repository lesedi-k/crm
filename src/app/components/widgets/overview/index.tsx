const Overview = () => {
    const acc = [
        {
            name: "Total Income:",
            balance: 2140.00
        },
        {
            name: "Total Spent:",
            balance: -1203.00
        },
    ]

    return (
        <div className="flex flex-col justify-between basis-1/3 card rounded-xl p-4">
            <h2 className="mb-1">Overview</h2> 
            {acc.map((a, index)=> (
                <div 
                    key={a + "" + index} 
                    className="flex-1 flex-col justify-between 
                        p-1 mb-2 mx-1 
                        rounded-lg bg-slate-50/60
                        hover:bg-slate-50 hover:rounded-lg hover:cursor-pointer
                ">
                    {/* TODO: Insert card icon */}
                    <h4>{a.name}</h4>
                    <code className={`text-lg ${a.balance < 0 ?`text-red-700` : `text-green-700`} pl-4`}>${Math.abs(a.balance).toFixed(2)}</code>
                </div>    
            ))}
        </div>     
    )
}

export default Overview;