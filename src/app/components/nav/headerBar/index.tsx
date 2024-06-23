import Image from "next/image";

/* Assets */
import notifications from "../../../../../public/assets/notification.svg"
import profile from "../../../../../public/assets/profile.svg"

/* Components */
import SearchBar from '../../functional/searchBar';

 export default function HeaderBar() {
    return (
        <div className="fixed w-11/12 flex flex-row h-12 px-4 justify-end mr-100">
            <SearchBar/>
            <Image
                src={notifications}
                alt={"Notifications"}
                className="opacity-50 hover:opacity-60 hover:cursor-pointer mr-2 dark:invert dark:opacity-70 dark:hover:opacity-90"
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