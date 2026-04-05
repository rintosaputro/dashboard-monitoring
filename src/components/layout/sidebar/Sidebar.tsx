import { Link } from "react-router";
import { BiHome } from "react-icons/bi";
import { CiGlobe } from "react-icons/ci";
import { BsCameraVideo } from "react-icons/bs";
import SidebarNavigation from "./SidebarNavigation";

const Sidebar = () => {
  return (
    <nav className="w-64 bg-sidebar text-white py-8">
      <Link to="/" className="w-full text-center">
        <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
      </Link>

      <ul className="mt-7">
        <li>
          <SidebarNavigation href="/" icon={<BiHome />} title="Main" />
        </li>
        <li>
          <SidebarNavigation
            href="/network"
            icon={<CiGlobe />}
            title="Network"
          />
        </li>
        <li>
          <SidebarNavigation
            href="/surveillance"
            icon={<BsCameraVideo />}
            title="Surveillance"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
