import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import macBook from '@/assets/images/macbook-exposed.png'
import { motion } from "framer-motion"

const HeroSection = () => {
    const intro = {
        hidden : {
            opacity : 0
        },
        visible :{
            opacity : 1,
            transition : {
                duration : .5,
                staggerChildren : .5,
                delayChildren : 1
            }
        }
    }
    const introChildren ={
        hidden : {opacity : 0 , y: -200},

        visible: {opacity : 1 , y:0 ,
        transition :  {
            duration : .5,
            type: 'spring',
            bounce : .5 
        }
        }
    }

    const laptop ={
        initial : { y : 0,rotate : 0 , scale : 5},
        animate : { y : 20, rotate : -30,
            scale : 1,
        transition : {
            duration : 1,
            y : {
                repeat : Infinity,
                duration : 2,
                repeatType : 'reverse',
                ease : 'easeInOut'
            }
        }
        }
    }
    return (
        <div className="overflow-hidden ">
        <Container className="grid grid-cols-1 mt-16  lg:grid-cols-2 h-screen place-content-center ">
            <motion.div variants={intro} initial='hidden' animate = 'visible'>
                <motion.h1 variants={introChildren} className="text-5xl lg:text-8xl font-bold">
                    <span className="text-gray">Don't worry.</span>
                    <br />
                    <span>We'll fix it.</span>
                </motion.h1>

                <motion.p variants={introChildren} className="max-w-50ch mt-10 mb-5">
                    Welcome to iRepair, your one-stop place for all kinds of Macbook repairs and diagnostics.
                </motion.p>
                <motion.div variants={introChildren}>

                <Button>Book a Service</Button>
                </motion.div>
            </motion.div>
            <motion.div variants={laptop} initial ='initial' animate ='animate' className="w-3/4 mt-14 mx-auto  lg:w-full  ">
                <img className=" h-[80%] mx-auto object-contain" src={macBook} alt="" />
            </motion.div>
        </Container>
        </div>
    );
};

export default HeroSection;