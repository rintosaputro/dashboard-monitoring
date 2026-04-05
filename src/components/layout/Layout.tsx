import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    // <div className="flex bg-linear-to-r/hsl from-indigo-800 to-cyan-500">
    // <div className="flex bg-gradient-to-r from-indigo-900 from-20% via-sky-800 via-40% to-indigo-950 to-80% p-6 text-white h-dvh">
    <div className="flex bg-disable h-dvh text-[#403c54]">
      <Sidebar />
      <section className="flex-1 p-6 h-dvh overflow-y-auto">
        <div className="max-w-350 mx-auto">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Layout;
