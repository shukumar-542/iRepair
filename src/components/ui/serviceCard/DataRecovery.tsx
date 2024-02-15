import useScrollHook from "@/hooks/useScrollHook";
import { motion } from "framer-motion";

const DataRecovery = () => {
    const {style, componentRef} = useScrollHook()
    return (
        <motion.div style={style} ref={componentRef} className="h-[300px] bg-gray rounded-md col-span-6 lg:col-span-7" ></motion.div>

    );
};

export default DataRecovery;