import { Outlet } from "react-router-dom";
// import Footer from "../components/shared/Footer/Footer";
import Footer2 from "../components/shared/Footer/Footer2";
import Navbar from "../components/shared/navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-[calc(100vh-188.250px)]">
        <Outlet />
      </div>
      {/* <Footer /> */}
      <Footer2 />
    </>
  );
};

export default Main;
