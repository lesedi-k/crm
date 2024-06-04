/* components */
import SideBar from "./components/sideBar";
import HeaderBar from "./components/headerBar";

/* Pages */
import Accounts from "./Home/page";
import DashBoard from "./Dashboard/page";


export default function Home() {

  return (
    <main className="flex h-full flex-col gradient">
        
        <div className="flex h-full flex-row">
          <SideBar/>
          <div className="flex-auto w-11/12 h-full flex-col p-7">
            <HeaderBar/>
            <Accounts/>
            {/* <DashBoard/> */}
          </div>
        </div>
        
    </main>
  );
}
