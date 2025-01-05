import React from 'react'
import {HERO_CONTENT} from '../constants'
import profilePic from '../assets/unnamed.jpg'
import {motion} from 'framer-motion'

const container = (delay) => ({
    hide: {x : 100, opacity: 0},
    present : {x: 0, opacity: 1, transition: {duration: 1, delay: delay}},
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0.5)}
                    initial="hide"
                    animate="present"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl text-center sm:text-center lg:text-left">
                        George Konstantinou
                    </motion.h1>
                    <motion.span 
                    variants={container(1)}
                    initial="hide"
                    animate="present"
                    className="bg-gradient-to-r from-pink-500 via-purple-400 via-purple-500 to-violet-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        Software Developer
                    </motion.span>
                    <motion.p 
                    variants={container(1.5)}
                    initial="hide"
                    animate="present"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify">
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, delay: 1.3}}
                    className="w-full h-auto max-w-[400px] md:max-w-[450px] rounded-lg object-cover" src={profilePic} alt="profile-pic" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero