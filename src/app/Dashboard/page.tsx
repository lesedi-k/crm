
import Accounts from "../components/accounts";
import { Card } from "../components/card";

export default function DashBoard(){

    function addCard(){}

    function removeCard(){}

    return(
        <div className="h-full">
            <h1>Dashboard</h1>
            <div className="flex flex-row">
                <Card name={"Accounts"} size={0} dataSource={"Vendors"} dataOptions={[]} Content={null}/>
                <Card name={"Accounts"} size={1} dataSource={"Vendors"} dataOptions={[]} Content={null}/>
                <Card name={"Accounts"} size={2} dataSource={"Vendors"} dataOptions={[]} Content={null}/>
                <Card name={"Accounts"} size={3} dataSource={"Vendors"} dataOptions={[]}  Content={null}/>
            </div>
            

        </div>
    );
}