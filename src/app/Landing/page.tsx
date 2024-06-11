/*
    TODO:
    [] right align + text color going out
    [] add upcoming
    [] add dark mode colors
*/
import Image from "next/image";
import { format } from 'date-fns';

/* Data */ 
import accounts from "../JSON/plaid_accounts.json"
import transactions from "../JSON/longPlaid.json"

/* Assets */
import filter from "../../../public/assets/filter.svg"

/* Compontents */
import Accounts from "../components/accounts";

export default function Landing() {
    const acc = accounts.accounts
    const ts = transactions.added
    let date = ""

    const name = "Lesedi";

    function handleChange() {

    }

    return (
        <div className="h-full">
            <h1>Home</h1>
            <h2 className="font-medium mb-4 text-gray-500">Welcome {name}!</h2>

            <div className="flex flex-row w-full h-5/6">
                <div className="w-3/12">
                    <Accounts title={"Vendors"} acc={acc}/>
                    <Accounts title={"Accounts"} acc={acc}/>
                </div>
                

                {/* Activity  */}
                <div className="flex flex-col w-7/12 rounded-xl mx-4 bg-slate-50 p-4 card">
                    {/* Timeline header */}
                    <div className="flex flex-row justify-between">
                        <h2 className="mb-4">Activity</h2>
                        <div className="flex flex-row w-full justify-end align-center">
                            <input
                                type="text"
                                value={""}
                                placeholder="Search Timeline"
                                className="rounded-full w-2/5 px-4 h-8 opacity-50 focus:opacity-100 text-sm mr-1
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
                        </div>
                                 
                    </div>
                    

                    {/* TODO: Past and upcoming transactions */}
                    <div className="flex flex-col h-full overflow-y-auto overflow-hidden px-2">
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
                                    <div className="flex flex-col justify-between p-2 w-9/12
                                                    rounded-xl bg-gray-300 mb-3
                                                    hover:cursor-pointer 
                                                     "
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

                {/* Alerts and Actions */}     
                <div className="flex flex-col h-1/2 w-3/12 rounded-xl bg-slate-50 p-4 overflow-y-auto card">
                    <h2>Notifications</h2>
                    <div 
                        className="bg-slate-50/60 w-full h-auto rounded-lg p-2 mb-2
                        hover:cursor-pointer
                        "
                    >
                        <h4 className="font-bold text-gray-600">Discover Payment Due in 2 days</h4>
                        <code>$562.45</code>
                        <p>Pay Now</p>
                    </div>

                    <div 
                        className="bg-slate-50/60 w-full h-auto rounded-lg p-2 mb-2
                        hover:cursor-pointer
                        "
                    >
                        <h4 className="font-bold text-gray-600">Venmo Jess 🍕 + 🚗</h4>
                        <code>$30.85</code>
                        <p>Venmo Now</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}