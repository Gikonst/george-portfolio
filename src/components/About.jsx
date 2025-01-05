import React from 'react'
import aboutImg from '../assets/developer.png'
import {ABOUT_TEXT} from '../constants'
import {motion} from 'framer-motion'
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl mb-40">
            About me
        </h1>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1, x: 0}}
            initial={{opacity: 0, x: -200}}
            transition={{duration: 1, delay: 0.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="w-full h-auto max-w-[500px] md:max-w-[400px] rounded-lg object-cover"src={aboutImg} alt="about"/> 
                </div>
            </motion.div>
            <motion.div 
                whileInView={{opacity:1, x: 0}}
                initial={{opacity: 0, x: 200}}
                transition={{duration: 1, delay: 0.5}}
                className='w-full lg:w-1/2'>
                <div className="flex justify-center lg:justify-start text-justify">
                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify">{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About