import useScrollHook from "@/hooks/useScrollHook";
import { motion } from "framer-motion";
import bg from "@/assets/images/chip 1.png"
const ChipReplacement = () => {
    const { style, componentRef } = useScrollHook()

    return (
        <motion.div style={style} ref={componentRef} className=" space-y-10 
         h-[300px] bg-light-gary  rounded-md  col-span-6 lg:col-span-5 overflow-hidden relative">
            <img src={bg} className="object-cover w-full h-full absolute mix-blend-overlay" alt="" />
            <div className="p-2 lg:p-10 space-y-5">
            <p>Chip Replacement </p>
            <p>There is no need to replace the motherboard for a tiny little dead chipset. </p>

            </div>
            {/* <div className="w-full h-full 
             bg-gray-600/30 backdrop-brightness-75 ">
                <p>Chip Replacement </p>
                <p>There is no need to replace the motherboard for a tiny little dead chipset. </p>
            </div> */}
        </motion.div>

    );
};

export default ChipReplacement;