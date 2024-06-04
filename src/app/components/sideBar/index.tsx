/*
    TODO:
    [] get icons
    [] display icons
    [] ON
*/
import Image from "next/image";

/* Assets */
import logo from "../../assets/p.svg"
import home from "../../assets/home.svg"
import settings from "../../assets/settings.svg"
import dashboard from "../../../../public/dashboard.svg"
import partitions from "../../assets/partitions.svg"
import gCal from "../../assets/gcal.svg"

export default function SideBar() {

    const pageIcons = [
        {
            title: "Home",
            icon: home,
            page: null,
        },
        {
            title: "Partitions",
            icon: partitions,
            page: null,
        },
        {
            title: "Dashboard",
            icon: dashboard,
            page: null,
        },
    ]

    const integrations = [
        {
            name: "GCal",
            icon: gCal
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
                        <div key={p +  "" + index} className="flex flex-col mt-5
                            items-center text-center
                            hover:cursor-pointer 
                        ">
                            <Image
                                src={p.icon}
                                alt={p.title}
                                className="invert opacity-50 hover:opacity-100"
                                width={30}
                                height={30}
                                priority
                            /> 
                            {/* <p className="text-xs text-white overflow-hidden overflow-clip ">{i.title}</p> */}
                        </div>
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
                    className="dark:invert opacity-50 hover:opacity-100 hover:cursor-pointer"
                    width={30}
                    height={30}
                    priority
                /> 
            </div>

        </div>
        
    );
}