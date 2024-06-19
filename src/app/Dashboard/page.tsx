
'use client'
import Accounts from "../components/widgets/summary";
import { Bar } from "../components/graph/bar";
import PageLayout from "../components/pageLayout";


function Dash() {
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


export default function DashBoard(){
    return (
        <main className="flex h-full flex-col gradient">
            <PageLayout Page={Dash}/> 
        </main>
      );
}