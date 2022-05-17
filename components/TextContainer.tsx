import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from "../variants"


const TextContainer = () => {
  return (
<motion.div 
        variants={staggerContainer}
        initial='initial'
        animate='animate'
        className="textContainer"
    >
        <div className="textContainer-top">
            <motion.span 
                variants={fadeIn()}
                className="text-orange-600">Find out more</motion.span>
            {/* <motion.span 
                variants={fadeIn()}
                className="first-letter:text-5xl">kepac</motion.span> */}
        </div>
        <motion.div 
            variants={fadeIn()}
            initial='initial'
            animate='animate'
            className="textContainer-middle">
            <span>DWAYNE</span>
        </motion.div>
        <div className="textContainer-bottom">
            <motion.button
                variants={fadeIn()}
            >
                PROJECTS
            </motion.button>
            <motion.p
                variants={fadeIn()}
            >
                FRONT END <span>DEVELOPER</span><br />
            </motion.p>

        </div>
    </motion.div>
  )
}

export default TextContainer