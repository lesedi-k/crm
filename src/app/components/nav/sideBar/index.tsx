'use client'
import React, { useState } from 'react';

import Link from "next/link";
import Image from "next/image";

/* Assets */
import dashboard from "../../../../../public/assets/dashboard.svg"
import logo from "../../../../../public/assets/P.svg"
import home from "../../../../../public/assets/home.svg"
import settings from "../../../../../public/assets/settings.svg"
import partitions from "../../../../../public/assets/partitions.svg"
import gCal from "../../../../../public/assets/gcal.svg"


export default function SideBar() {
    const [page, setPage] = useState<number>(0)

    const pageIcons = [
        {
            title: "Home",
            icon: home,
            link: "/",
            page: null,
        },
        {
            title: "Dashboard",
            icon: dashboard,
            // link: "/Dashboard",
            link: "",
            page: null,
        },
        {
            title: "Partitions",
            icon: partitions,
            link: "",
            page: null,
        },
    ]

    const integrations = [
        {
            name: "GCal",
            icon: gCal,
            link: ""
        }
    ]


    return (
        <div className="flex h-100 flex-col items-center my-5 pl-4">
            <div className="
                h-full rounded-full w-18
                bg-gray-950 opacity-80
                items-center
                pt-5 p-4
                flex flex-col justify-between
            ">   
                <Image
                    src={logo}
                    alt="Partition logo"
                    className="mb-30"
                    width={25}
                    priority
                />  

                {/* Page Icons */}    
                <div>
                    {pageIcons.map((p, index) => (
                        <Link 
                            href={p.link}
                            key={p +  "" + index} 
                        >
                            <div 
                                className={`flex flex-col mt-5
                                items-center text-center
                                ${p.link !== "" ? `hover:cursor-pointer` : `cursor-default` }`}
                                onClick={()=> { p.link !== "" ? setPage(index) : ""}}
                            >
                                <Image
                                    src={p.icon}
                                    alt={p.title}
                                    className="invert opacity-50"
                                    width={30}
                                    height={30}
                                    priority
                                    style={{ opacity: page === index ? 1 : 0.5}}
                                /> 
                            </div>
                        </Link>
                    ))}
                </div>
    
                {/* Intergration Icons */}
                <div>
                    {integrations.map((i, index) => (
                        <div key ={i +  "" + index} className="flex flex-col mt-5
                            items-center text-center
                            hover:cursor-pointer 
                        ">
                            <Image
                                src={i.icon}
                                alt={i.name}
                                className="opacity-90 hover:opacity-100"
                                width={30}
                                height={30}
                                priority
                            /> 
                            {/* <p className="text-xs text-white overflow-hidden overflow-clip ">{i.title}</p> */}
                        </div>
                    ))}
                </div>

                <Image
                    src={settings}
                    alt={"Settings"}
                    className="invert opacity-50 hover:opacity-100 hover:cursor-pointer"
                    width={30}
                    height={30}
                    priority
                /> 
            </div>

        </div>
        
    );
}