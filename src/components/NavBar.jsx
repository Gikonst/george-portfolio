import logo from "../assets/MyLogoGk.png";
import {FaLinkedin, FaGithub, FaDownload} from "react-icons/fa";
import {motion} from "framer-motion";
import myCV from "../assets/George_Konstantinou_CV.pdf";


const NavBar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className=" flex flex-shrink-0 items-center ml-[-35px]">
        <img src={logo} alt="logo" className="w-36 h-auto opacity-80"/>
    </div>
    <div className="m-6 sm:m-8 lg:m-12 flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-4xl text-gray-300">
    <motion.div 
      whileHover={{ scale: 1.2, y: -5, }} 
      transition={{ type: "spring", stiffness: 300 }}>
      <motion.a
        href={myCV}
        download="George_Konstantinou_CV.pdf"
        className="flex items-center gap-3 px-3 py-1 border border-gray-300 text-gray-300 rounded-md bg-transparent transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-400 hover:via-purple-500 hover:to-violet-500 hover:text-white">
        <FaDownload className="text-lg"/>
        <span className="text-lg">CV</span>
      </motion.a> 
    </motion.div>      
      <motion.a 
          whileHover={{ scale: 1.2, y: -5, }} 
          transition={{ type: "spring", stiffness: 300 }}
          href="https://www.linkedin.com/in/gkonstantinou" 
          target="_blank"><FaLinkedin /></motion.a>
      <motion.a 
        whileHover={{ scale: 1.2, y: -5 }} 
        transition={{ type: "spring", stiffness: 300 }}
        href="https://github.com/Gikonst"
        target="_blank"><FaGithub />
      </motion.a>
    </div>
  </nav>
}

export default NavBar;
