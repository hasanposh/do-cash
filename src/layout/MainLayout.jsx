import NavBar from "../compenents/common/NavBar";
import SideBar from "../compenents/common/SideBar";
import Home from "../pages/Home";

const MainLayout = () => {
  return (
    <div className="bg-custom-gray">
      <div className=" max-w-screen-xl mx-auto h-screen  flex flex-col ">
      <NavBar />
      <div className="flex flex-row-reverse flex-grow overflow-hidden">
        <div className="flex-grow overflow-y-auto">
          <Home />
        </div>
        <SideBar />
      </div>
      </div>
    </div>
  );
};

export default MainLayout;
