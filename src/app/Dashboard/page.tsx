
import Accounts from "../components/accounts";
import { Bar } from "../components/bar";

export default function DashBoard(){

    function addCard(){}

    function removeCard(){}

    return(
        <div className="h-full">
            <h1>Dashboard</h1>
            <div className="flex flex-row">
            <Bar name={"Rainfall"} size={0} dataSource={"Rainfall"} valueOptions={[]} Content={null}/>
            </div>
        </div>
    );
}