import { type FC } from "react";
import { Link, useLocation } from "react-router";
import type { NavigationProps } from "./sidebar.type";
import { cn } from "../../../utils/classname";

const SidebarNavigation: FC<NavigationProps> = ({ icon, title, href }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={cn(
        "w-full flex items-center gap-2.5 px-6 py-3 text-active-navigation hover:bg-black/20 hover:text-active-navigation",
        isActive ? "bg-black/20" : "",
      )}
    >
      {icon}{" "}
      <span
        className={cn(
          "text-sm",
          isActive ? "text-active-navigation" : "text-white",
        )}
      >
        {title}
      </span>
    </Link>
  );
};

export default SidebarNavigation;
