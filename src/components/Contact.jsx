import {CONTACT} from "../constants";
import { motion } from "motion/react";

export default  function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
      whileInView={{opacity: 1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration: 1}}
       className="my-10 text-center text-4xl">Get in Touch</motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
        whileInView={{x: 0, opacity: 1}}
        initial={{x:-100, opacity:0}}
        transition={{duration: .5}}
         className="my-4">{CONTACT.address}</motion.p>
        <motion.p
        whileInView={{x: 0, opacity: 1}}
        initial={{x:100, opacity:0}}
        transition={{duration: 1}}
         className="my-4">{CONTACT.phoneNo}</motion.p>
        <a href="#" className="my-4 border-b ">{CONTACT.email}</a >
      </div>
    </div>
  )
}


