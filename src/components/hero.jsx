import {HERO_CONTENT} from "../constants";
import profPic from "../assets/kevinRushProfile.png";
import { motion } from "motion/react";

const container = (delay)=>({
    hidden: { x: -200, opacity: 0},
    visible: {
        x:0, 
        opacity: 1,
        transition: {duration: .5, delay: delay}
    }
});

export default function hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(.5)}
            initial="hidden"
            animate="visible"
             className="pb-16 text-6xl font-thin tracking-tight lg:mt-8 lg:text-8xl">Mhd Dev</motion.h1>
            <motion.span
            variants={container(.7)}
            initial="hidden"
            animate="visible"
             className="bg-gradient-to-r from-pink-300 via-purple-600 to-purple-400 bg-clip-text text-3xl tracking-tight text-transparent">Front-End Engineer</motion.span>
            <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
             className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
        </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img
                initial={{x:100, opacity:0}}
                animate={{x:0, opacity: 1}}
                transition={{duration: 1, delay: 1.2}}
                 src={profPic} alt="profile pic" />
            </div>
        </div>
      </div>
    </div>
  )
}


