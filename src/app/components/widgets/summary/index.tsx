import Overview from "../overview";
import Line from "../../graph/line";

export default  function Summary() {
    return (
        <div className="flex flex-col w-full row-span-3 col-span-3  max-h-screen">
            <h2 className="mb-1">Activity</h2> 
            <div className="flex flex-row h-full w-full justify-between gap-x-4">
                {/* Expense Summary */}
                <Overview/>
                    

                <div className="flex flex-col justify-between basis-2/3 card rounded-xl p-2 bg-red">
                    {/* Slider + adjuster */}
                    <Line/>
                    
                </div>  
            </div>
                 
        </div>
    );
}