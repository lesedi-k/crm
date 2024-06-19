/* Data */ 
import accounts from "../JSON/plaid_accounts.json"
import transactions from "../JSON/longPlaid.json"

/* Compontents */
import ActivityCard from "../components/widgets/activity";
import Events from "../components/widgets/events";


export default function Landing() {
    const acc = accounts.accounts
    const ts = transactions.added
    let date = ""

    const name = "Lesedi";

    // const tiles = [
    //     <ActivityCard/>, 
    //     <Events/>,
    // ]

    function handleHold() {
        //make all opaque
        //activate on hover, return opacity
    }

    function handleDrag() {
        //hold prev positions
        //swap position? temp
    }

    function handleDrop() {
        // firm new positions
    }

    function addTile() {

    }

    return (
        <div className="h-full overflow-hidden">
            <h1>Home</h1>
            <h2 className="font-medium mb-4 text-gray-500">Welcome {name}!</h2>

            {/* Grid Space */}
            <div className="grid grid-rows-8 grid-cols-4 gap-4 grid-flow-row-dense w-full h-full overflow-scroll">
                <ActivityCard/> 
                <Events/>
            </div>
        </div>
    );
}