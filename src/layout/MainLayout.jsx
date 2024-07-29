import NavBar from "../compenents/common/NavBar";
import SideBar from "../compenents/common/SideBar";
import Header from "../pages/Header";
import Home from "../pages/Home";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-4">
      <NavBar />
      <div className="flex flex-row-reverse">
        <div>
          <Header />
          <Home />
        </div>
        <SideBar />
      </div>
    </div>
  );
};

export default MainLayout;
