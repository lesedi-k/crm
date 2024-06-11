/* components */
import SideBar from "../sideBar";
import HeaderBar from "../headerBar";

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