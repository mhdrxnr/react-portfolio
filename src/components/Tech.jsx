import { RiReactjsLine } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiThreedotjs } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { FaLaravel } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiGreensock } from "react-icons/si";
import { motion } from "motion/react";

const iconMove = (duration)=>({
    initial: {y:-10},
    animate: {
        y:[10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

export default function Tech() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
      whileInView={{opacity: 1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div
       whileInView={{x: 0, opacity: 1}}
       initial={{x:-100, opacity:0}}
       transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconMove(2.5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div
        variants={iconMove(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJsSquare className="text-7xl text-yellow-400"/>
        </motion.div>
        <motion.div
        variants={iconMove(3.5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiNextjsLine className="text-7xl text-neutral-500"/>
        </motion.div>
        <motion.div
        variants={iconMove(4)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiThreedotjs className="text-7xl text-blue-400"/>
        </motion.div>
        <motion.div
        variants={iconMove(4.5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-7xl text-orange-600"/>
        </motion.div>
        <motion.div
        variants={iconMove(5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaCss3 className="text-7xl text-cyan-500"/>
        </motion.div>
        <motion.div
        variants={iconMove(5.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssFill className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div
        variants={iconMove(6)}
        initial="initial"
        animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaBootstrap className="text-7xl text-purple-800"/>
        </motion.div>
        <motion.div
        variants={iconMove(6.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGitAlt className="text-7xl text-red-600"/>
        </motion.div>
        <motion.div
        variants={iconMove(7)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGithub className="text-7xl text-neutral-500"/>
        </motion.div>
        <motion.div
        variants={iconMove(7.5)}
        initial="initial"
        animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandVite className="text-7xl text-purple-600"/>
        </motion.div>
        <motion.div
        variants={iconMove(8)}
        initial="initial"
        animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaLaravel className="text-7xl text-red-600"/>
        </motion.div>
        <motion.div
        variants={iconMove(8.5)}
        initial="initial"
        animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPhp className="text-7xl text-purple-800"/>
        </motion.div>
        <motion.div
        variants={iconMove(9)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandFramerMotion className="text-7xl text-purple-500"/>
        </motion.div>
        <motion.div
        variants={iconMove(9.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiGreensock className="text-7xl text-green-500"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

