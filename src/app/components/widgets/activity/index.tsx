
import Image from "next/image";
import { format } from 'date-fns';

/* Data sources */
import accounts from "../../../JSON/plaid_accounts.json"
import transactions from "../../../JSON/gpt_transactions.json"

/* Assets */
import filter from "../../../../../public/assets/filter.svg"
import cardIcon from "../../../../../public/assets/cardIcon.svg"
import boa from "../../../../../public/assets/boa.svg"
import chase from "../../../../../public/assets/chase.svg"
import wells from "../../../../../public/assets/wells.svg"
import venmo from "../../../../../public/assets/venmo.svg"
import citi from "../../../../../public/assets/citi.svg"
import affirm from "../../../../../public/assets/affirm.svg"
import klarna from "../../../../../public/assets/klarna.svg"
import robinhood from "../../../../../public/assets/rh.svg"

export default function ActivityCard() {
    const acc = accounts.accounts
    const ts = transactions.transactions
    let date = "";

    function icon(accountName : string) : string {
        const test :string = accountName.toLocaleLowerCase()
        if (test.includes("bank of america")) return boa;
        if (test.includes("chase")) return chase;
        if (test.includes("wells fargo")) return wells;
        if (test.includes("citi")) return citi;
        if (test.includes("venmo")) return venmo;
        if (test.includes("affirm")) return affirm;
        if (test.includes("robinhood")) return robinhood;
        if (test.includes("klarna")) return klarna;
        return cardIcon;
    }

    return (
        <div className="flex grid-flow-col-dense col-span-3 row-span-5 card rounded-xl">
            {/* Sidebar */}
            <div className="flex flex-col basis-2/5 card rounded-l-xl p-4 overflow-clip">
                <div className="flex flex-row justify-between">
                    <h2 className="mb-1">Accounts</h2> 
                    <div className="flex flex-row justify-end">
                        <input
                            type="text"
                            value={""}
                            placeholder="Search"
                            className="rounded-full w-8/12 h-8
                                px-4 mr-2
                                opacity-50 focus:opacity-100 text-sm 
                                focus:border-transparent focus:outline-none focus:ring-0
                            "
                        />
                        <Image
                            src={filter}
                            alt={"Filter"}
                            className="opacity-30 hover:opacity-50 hover:cursor-pointer pb-5 
                                    dark:invert dark:opacity-100"
                            width={30}
                            height={30}
                            priority
                        />        
                        <div className="flex hover:cursor-pointer opacity-30 items-start justify-start dark:opacity-100">
                            <h1 className="-mt-3">+</h1>
                        </div>  
                    </div>
                </div>
    
                <div className="flex flex-col overflow-y-scroll h-screen">
                    {acc.map((a, index)=> (
                        <div key={a + "" + index} className="flex flex-row justify-between p-2 mb-2
                                rounded-xl card
                                hover:bg-slate-50 hover:dark:bg-gray-950/40 hover:rounded-lg hover:cursor-pointer
                        ">
                            <Image
                                src={icon(a.name)}
                                alt={"Filter"}
                                className="opacity-100 justify-self-center align-self-center ml-5"
                                width={50}
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

            <div className="flex flex-col basis-3/5 p-4 overflow-clip">
                {/* Activity header */}
                <div className="flex flex-row justify-between">
                    <h2 className="mb-4">Transactions</h2>
                </div>
                
                {/* Activity message Space */}
                <div className="flex flex-col overflow-y-scroll  h-screen px-2">
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
                                    <div className={`flex flex-col justify-between w-11/12
                                                    rounded-xl  mb-2 px-2 py-1
                                                    hover:cursor-pointer
                                                    ${t.amount > 0 ? `bg-gray-300 dark:bg-gray-400/50` : `bg-cyan-500/40`}
                                                    `}
                                    >
                                        <div className="flex flex-row justify-between">
                                            <h4>{t.name}</h4>
                                            <code className={t.amount < 0 ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-800'}>{t.amount > 0 ? "-" : "+"}${amount.toFixed(2)}</code>
                                        </div>

                                        <div className="flex flex-row justify-between">
                                            <div className="flex flex-row flex-wrap">
                                                {t.category.map((c, index)=>(
                                                    <div key={c + "" + index} className="bg-slate-600/30 dark:bg-slate-900/30  rounded-full px-4 mr-1 mb-2">
                                                        <p className="text-white">{c}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <p>{t.account_name}</p>
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