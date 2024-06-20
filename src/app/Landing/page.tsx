/* Compontents */
import ActivityCard from "../components/widgets/activity";
import Events from "../components/widgets/events";
import Summary from "../components/widgets/summary";

export default function Landing() {
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

    function addTile() {}

    return (
        <div className="h-full overflow-hidden">

            {/* Grid Space */}
            <div className="grid grid-rows-8 grid-cols-4 gap-4 grid-flow-row-dense w-full h-full overflow-scroll pt-5">
                <Summary/>
                <ActivityCard/> 
                <Events/>                
            </div>
        </div>
    );
}