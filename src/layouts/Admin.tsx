import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Admin = () => {
    return (
        <div className="grid grid-cols-12">
            <SideBar></SideBar>
            <div className="col-span-8 h-[200vh]">
                <Outlet />
            </div>
        </div>
    );
};

export default Admin;