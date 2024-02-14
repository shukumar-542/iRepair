import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"

const Navbar = () => {
    return (
        <motion.header initial={{opacity : 0}} animate ={{opacity : 1 , transition : {delay : 1}}} className="h-16 fixed w-full bg-white z-[999] ">
            <nav className="w-full h-full px-[20px] max-w-[1230px] mx-auto flex justify-between items-center">
                <span className="text-[32px]">iRepair</span>
                <ul className="space-x-2">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <Button>
                        <NavLink to='/'>Login</NavLink>
                    </Button>
                </ul>
            </nav>
        </motion.header>
    );
};

export default Navbar;