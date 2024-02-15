import useScrollHook from "@/hooks/useScrollHook";
import { motion } from "framer-motion";

const ChipReplacement = () => {
    const {style, componentRef} = useScrollHook()

    return (
        <motion.div style={style} ref={componentRef} className="h-[200px] bg-red-500 rounded-md  col-span-6 lg:col-span-5 " ></motion.div>
    
    );
};

export default ChipReplacement;