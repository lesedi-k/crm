export default  function Summary() {

    const acc = [
        {
            name: "Total Spent",
            balance: -1203.00
        },
        {
            name: "Total Revenue",
            balance: 2140.00
        },
    ]

    return (
        <div className="grid row-span-2 col-span-2 flex-col rounded-xl p-4 pb-10 max-h-screen card">
            <div className="flex flex-row justify-between">
                <h2 className="mb-1">Activity</h2> 

                <div className="flex flex-row">
                    <div className="hover:cursor-pointer w-3/12">
                        <p>pick time</p>
                    </div>   
                    <div className="hover:cursor-pointer w-3/12">
                        <p>Got to Finaicials</p>
                    </div>  
                </div>
                
            </div>
            
            <div className="flex flex-row">
                {acc.map((a, index)=> (
                    <div 
                        key={a + "" + index} 
                        className="flex flex-col justify-between 
                            p-2 mb-2 mx-1 w-1/3 h-full
                            rounded-lg bg-slate-50/60
                            hover:bg-slate-50 hover:rounded-lg hover:cursor-pointer
                    ">
                        {/* TODO: Insert card icon */}
                        <h4>{a.name}</h4>
                        <code className={`text-lg ${a.balance < 0 ?`text-red-700` : `text-green-700`}`}>${Math.abs(a.balance).toFixed(2)}</code>
                    </div>    
                ))}
            </div>
            
        </div>
    );
}