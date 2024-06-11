export default  function Accounts({ title, acc }: { title: string; acc:any[] }) {
    return (
        <div className=" flex flex-col h-1/2 w-full rounded-xl mb-4 p-4 pb-10 max-h-screen card">
            <div className="flex flex-row justify-between">
                <h2 className="mb-1">{title}</h2> 
                <div className="hover:cursor-pointer w-1/12">
                    <h3>+</h3>
                </div>   
            </div>
            
            {acc.map((a, index)=> (
                <div key={a + "" + index} className="flex flex-row justify-between p-2 mb-2
                        rounded-lg bg-slate-50/60
                        hover:bg-slate-50 hover:rounded-lg hover:cursor-pointer
                ">
                    {/* TODO: Insert card icon */}
                    <h4>{a.name}</h4>
                    <code className="text-lg">${a.balances.available.toFixed(2)}</code>
                </div>    
            ))}
        </div>
    );
}