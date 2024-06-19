/* components */
import SideBar from "../nav/sideBar";
import HeaderBar from "../nav/headerBar";

interface PageLayoutProps {
  Page: React.ComponentType;
}

const PageLayout: React.FC<PageLayoutProps> = ({ Page }) => {
  

  return (
    <div className="flex h-full flex-col gradient">
        <div className="flex h-full flex-row">
          <SideBar/>
          <div className="flex-auto w-11/12 h-full flex-col p-7">
            <HeaderBar/>
            <Page/>
          </div>
        </div>
        
    </div>
  );
}

export default PageLayout;