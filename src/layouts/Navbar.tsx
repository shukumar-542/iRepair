import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="h-16 ">
            <nav className="w-full h-full px-[20px] max-w-[1220px] mx-auto flex justify-between items-center">
                <span className="text-[32px]">iRepair</span>
                <ul className="space-x-2">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <Button>
                        <NavLink to='/'>Login</NavLink>
                    </Button>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;