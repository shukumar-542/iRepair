import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <aside className="col-span-2 bg-light-gray p-5 h-screen sticky top-0 left-0 overflow-auto">
            <nav className="flex  flex-col gap-2">
                <NavLink to='/admin/dashboard' className={({ isActive }) => cn("flex gap-2  p-3 bg-gray rounded-md  transition-all text-center ",
                {
                    'bg-dark-gray text-white ' : isActive
                }
                )}>
                    <LayoutDashboard className="shrink-0" />
                    <span className="truncate">Dashboard</span>
                </NavLink>
                <NavLink to='/admin/service-list' className={({ isActive }) => cn("flex gap-2  p-3 bg-gray rounded-md  transition-all text-center ",
                {
                    'bg-dark-gray text-white ' : isActive
                }
                )}>
                    <LayoutDashboard className="shrink-0" />
                    <span className="truncate">Add Service</span>
                </NavLink>
                <NavLink to='/admin/services' className={({ isActive }) => cn("flex gap-2  p-3 bg-gray rounded-md  transition-all text-center ",
                {
                    'bg-dark-gray text-white ' : isActive
                }
                )}>
                    <LayoutDashboard className="shrink-0" />
                    <span className="truncate">Service List</span>
                </NavLink>
            </nav>
        </aside>
    );
};

export default SideBar;