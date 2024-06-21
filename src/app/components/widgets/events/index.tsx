const Events = () => {

    const events = [
        {
            description: "Discover Payment Due in 2 days",
            amount: 562.45,
            actionDescription: "Pay Now",
            action: null
        },
        {
            description: "Venmo Jess 🍕 + 🚗",
            amount: 30.85,
            actionDescription: "Venmo Now",
            action: null
        },
        {
            description: "Klarna payment (3/4)",
            amount: 8.85,
            actionDescription: "Pay Now",
            action: null
        }
    ]

    return (
        <div className="grid row-span-4 flex-col rounded-xl bg-slate-50 p-4 overflow-y-auto card mt-10">
        <h2>Upcoming Events</h2>
        {events.map((e, index)=> (
            <div 
                key={e+ "" +index}
                className="card
                            w-full h-auto 
                            rounded-lg 
                            p-2 mb-2
                            hover:cursor-pointer
                        "
            >
                <h4 className="font-bold">{e.description}</h4>
                <code>${e.amount}</code>
                <p className="font-bold text-right">{e.actionDescription}</p>
            </div>
        ))}
    </div>
    )
}

export default Events;