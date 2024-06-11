'use client'
import React, { useState } from 'react';

/* components */
import SideBar from "./components/sideBar";
import HeaderBar from "./components/headerBar";

/* Pages */
import Landing from "./Landing/page";
import DashBoard from "./Dashboard/page";


export default function Home() {
  const [selected, setSelected] = useState<number>(0)

  return (
    <main className="flex h-full flex-col gradient">
        
        <div className="flex h-full flex-row">
          <SideBar selected={0}/>
          <div className="flex-auto w-11/12 h-full flex-col p-7">
            <HeaderBar/>

            {/* Pages */}
            {/* <Landing/> */}
            <DashBoard/>
          </div>
        </div>
        
    </main>
  );
}
