import  {PROJECTS} from '../constants';
import { motion } from 'motion/react';

export default function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
      whileInView={{opacity: 1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration: 1}}
         className='my-20 text-center text-4xl'>Projects</motion.h2>
      <div>
        {PROJECTS.map((prj, index) =>(
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div
                whileInView={{x: 0, opacity: 1}}
                initial={{x:-100, opacity:0}}
                transition={{duration: 1}}
                 className='w-full lg:w-1/4'>
                    <img src={prj.image} width={150} height={150}  alt={prj.title} className='mb-6 rounded' />
                </motion.div>
                <motion.div
                whileInView={{x: 0, opacity: 1}}
                initial={{x:100, opacity:0}}
                transition={{duration:1}}
                 className="w-full max-w-xl lg:w-3/4">
                    <h5 className='mb-2 font-semibold'>{prj.title}</h5>
                    <p className='mb-4 text-neutral-400'> {prj.description} </p>
                    {prj.technologies.map((tech, index) =>(
                        <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
                    ))}
                </motion.div>
               
            </div>
        ))}
      </div>
    </div>
  )
}


