
import Image from "next/image";
import { format } from 'date-fns';

/* Data sources */
import accounts from "../../../JSON/plaid_accounts.json"
import transactions from "../../../JSON/longPlaid.json"

/* Assets */
import filter from "../../../../../public/assets/filter.svg"
import cardIcon from "../../../../../public/assets/cardIcon.svg"

export default function ActivityCard() {

    const acc = accounts.accounts
    const ts = transactions.added
    let date = "";

    return (
        <div className="grid grid-flow-col-dense col-span-3 row-span-7 card rounded-xl">
            {/* Sidebar */}
            <div className="flex flex-col bg-slate-50/30 rounded-l-xl p-4 overflow-clip">
                <div className="flex flex-row justify-between">
                    <h2 className="mb-1">Cards</h2> 
                    <div className="flex flex-row justify-end">
                        <input
                            type="text"
                            value={""}
                            placeholder="Search Timeline"
                            className="rounded-full w-11/12 h-8
                                px-4 mr-2
                                opacity-50 focus:opacity-100 text-sm 
                                focus:border-transparent focus:outline-none focus:ring-0
                            "
                        />
                        <Image
                            src={filter}
                            alt={"Filter"}
                            className="opacity-30 hover:opacity-50 hover:cursor-pointer pb-5"
                            width={30}
                            height={30}
                            priority
                        />        
                        <div className="flex hover:cursor-pointer opacity-30 items-start justify-start">
                            <h1 className="-mt-3">+</h1>
                        </div>  
                    </div>
                </div>
    
                <div className="flex flex-col overflow-y-scroll h-screen">
                    {acc.map((a, index)=> (
                        <div key={a + "" + index} className="flex flex-row justify-between p-2 mb-2
                                rounded-xl bg-slate-50/60
                                hover:bg-slate-50 hover:rounded-lg hover:cursor-pointer
                        ">
                            <Image
                                src={cardIcon}
                                alt={"Filter"}
                                className="opacity-70 justify-self-center align-self-center rounded-full ml-5"
                                height={50}
                                priority
                            />  
                            <div className="flex flex-col w-9/12">
                                <h4>{a.name}</h4>
                                <p>Balance:</p>
                                <code className="text-lg">${a.balances.available.toFixed(2)}</code>
                            </div>    
                            
                        </div>    
                    ))}
                </div> 
            </div>

            <div className="flex flex-col p-4 overflow-clip">
                {/* Activity header */}
                <div className="flex flex-row justify-between">
                    <h2 className="mb-4">Transactions</h2>
                </div>
                
                {/* Activity message Space */}
                <div className="flex flex-col-reverse overflow-y-scroll  h-screen px-2">
                    {ts.map((t, index)=> {
                        let changed = false;
                        if (t.date !== date) {
                            changed = true
                            date = t.date
                        }

                        const amount = Math.abs(t.amount)
                        const formattedDate = format(new Date(t.date), 'MMMM dd, yyyy');

                        return (
                            <div key={t + "" + index}>
                                {changed && <p className="text-center mb-4"> {formattedDate} </p>}
                                <div className={t.amount < 0 ? 'flex flex-row' :  'flex flex-row-reverse' }>
                                    <div className={`flex flex-col justify-between w-9/12
                                                    rounded-xl  mb-3 p-2 
                                                    hover:cursor-pointer
                                                    ${t.amount > 0 ? `bg-gray-300` : `bg-green-400/40`}
                                                    `}
                                    >
                                        <div className="flex flex-row justify-between">
                                            <h4>{t.name}</h4>
                                            <code className={t.amount < 0 ? 'text-green-700' : 'text-red-700'}>{t.amount > 0 ? "-" : "+"}${amount.toFixed(2)}</code>
                                        </div>

                                        <div className="flex flex-row justify-between">
                                            <div className="flex flex-row">
                                                {t.category.map((c, index)=>(
                                                    <div key={c + "" + index} className="bg-slate-600 rounded-full px-4 mr-2">
                                                        <p className="text-white">{c}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <p>CardName</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                    
            </div>
        </div>
        
    )
}