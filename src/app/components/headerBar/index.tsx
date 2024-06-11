'use client'
import React, { useState } from 'react';

import Image from "next/image";

/* Assets */
import notifications from "../../../../public/assets/notification.svg"
import profile from "../../../../public/assets/profile.svg"
import searchIcon from "../../../../public/assets/search.svg"

 export default function HeaderBar() {

    //is text not empty, stay there
    const [search, setSearch] = useState<string>("");
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [isBlur, setIsBlur] = useState<boolean>(false);

    if (search !== "" ) {
        //don't collapse on hover
    }

    //udatedrop content using useEffect

    return (
        <div className="fixed w-11/12 flex flex-row h-12 px-4 justify-end mr-100">
            {/* Search Bar */}
            <div className="flex flex-col w-1/4 items-center">
                <div 
                    className={`flex flex-row  bg-transparent rounded-full h-9 mt-2 self-end
                                ${isExpanded ? 'opacity-60 bg-white w-full mr-2 ease-in duration-300' 
                                : 'w-9 ease-in duration-300'} 
                    `}
                    onMouseEnter={()=>setIsExpanded(true)}
                >
                    <Image
                        src={searchIcon}
                        alt={"search"}
                        className="pl-2 mt-2 opacity-50 h-5"
                        width={40}
                        height={40}
                        priority
                    /> 
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search"
                        className="rounded-full w-full h-9 text-sm outline-none ring-0 mr-2 bg-transparent focus:w-96"
                        style={{ 
                            backgroundImage: `url(${search})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: '1px left',
                            backgroundSize: '40px 40px'
                        }}
                        onFocus={()=>setIsExpanded(true)}
                        onBlur={()=>{setIsExpanded(false); setSearch("")}}
                    />
                </div>

                {search !== "" && isExpanded &&
                    <div 
                        className="flex flex-col rounded-lg bg-slate-50/40 w-11/12 h-10 p-2 mr-2"
                    >
                        <div className='flex flex-row'>
                        <svg
                            className="animate-spin h-5 w-5 mr-3 rounded-full"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-50"
                                cx="12"
                                cy="12"
                                r="10"
                                fill="none"
                                stroke="white"
                                strokeWidth={5}
                            />
                            <path
                                fill="none"
                                stroke="grey"
                                className="opacity-50"
                                strokeWidth={10}
                                d="
                                    M 12,0
                                    A 12,12 0 0,1 24,12
                                    
                                "
                            />
                        </svg>
                        <p className='font-semibold text-gray-500'>Loading...</p>
                        </div>    
                        
                    </div>
                }
            </div>
            

            

            <Image
                src={notifications}
                alt={"Notifications"}
                className="opacity-50 hover:opacity-60 hover:cursor-pointer mr-2"
                width={30}
                height={30}
                priority
            /> 

            <Image
                src={profile}
                alt={"Profile"}
                className="rounded-full hover:cursor-pointer"
                width={50}
                height={40}
                priority
            /> 
                
        </div>
    );
 }