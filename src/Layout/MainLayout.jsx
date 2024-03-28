import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="  ">
        <div className="h-16">
          <Navbar></Navbar>
        </div>
        <div className=" w-[95%] md:w-[85%] mx-auto">
          <Outlet></Outlet>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
