

const Events = () => {

    return (
        <div className="grid row-span-3 flex-col rounded-xl bg-slate-50 p-4 overflow-y-auto card">
        <h2>Upcoming Events</h2>
        <div 
            className="bg-slate-50/60 w-full h-auto rounded-lg p-2 mb-2
            hover:cursor-pointer
            "
        >
            <h4 className="font-bold text-gray-600">Discover Payment Due in 2 days</h4>
            <code>$562.45</code>
            <p className="font-bold">Pay Now</p>
        </div>

        <div 
            className="bg-slate-50/60 rounded-lg p-2 mb-2
            hover:cursor-pointer
            "
        >
            <h4 className="font-bold text-gray-600">Venmo Jess 🍕 + 🚗</h4>
            <code>$30.85</code>
            <p className="font-bold">Venmo Now</p>
        </div>
    </div>
    )
}

export default Events;