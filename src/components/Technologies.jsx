import React from 'react'
import Python from '../assets/PythonLogo.png'
import CSharp from '../assets/CSharpLogo.png'
import SqlServer from '../assets/SqlServer.png'
import ReactLogo from '../assets/ReactLogo.png'
import Postman from '../assets/PostmanLogo.png'
import { motion } from 'framer-motion'

const techVariables = (duration) => ({
    initial: {y: -10},
    animate: {y: [10, -10], transition: {duration: duration, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{opacity:1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={techVariables(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className="w-16 h-auto" src={CSharp} alt="csharp" />
            </motion.div>
            <motion.div 
            variants={techVariables(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className="w-16 h-auto" src={SqlServer} alt="sqlserver" />
            </motion.div>
            <motion.div 
            variants={techVariables(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className="w-16 h-auto" src={ReactLogo} alt="react" />
            </motion.div>
            <motion.div 
            variants={techVariables(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className="w-16 h-auto" src={Python} alt="python" />
            </motion.div>
            <motion.div 
            variants={techVariables(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className="w-16 h-auto" src={Postman} alt="postman" />
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Technologies