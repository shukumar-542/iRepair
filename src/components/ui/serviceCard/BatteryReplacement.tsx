import useScrollHook from "@/hooks/useScrollHook";
import { motion } from "framer-motion";
import trackPad from "@/assets/images/t.png"

const BatteryReplacement = () => {
    const { style, componentRef } = useScrollHook()
    return <motion.div
        style={style}
        ref={componentRef} className="h-[300px] overflow-hidden lg:flex  justify-between bg-gray rounded-md col-span-12" >

        <div className=" p-2 lg:p-10 space-y-2 lg:space-y-20">
            <p>Battery Replacement</p>
            <p className="max-w-[50ch] lg:text-2xl " >Get back to 100% battery health.
                With 6 month replacement warranty.  </p>
        </div> 
        <div className="overflow-hidden">
            <img className="object-contain " src={trackPad} alt="" />
        </div>
    </motion.div>

};

export default BatteryReplacement;