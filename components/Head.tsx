import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

import { AiFillLinkedin, AiFillTwitterSquare, AiOutlineGithub } from 'react-icons/ai'

const Head = () => {
  return (
    <motion.nav 
      variants={fadeIn('down')}
      initial='initial'
      animate='animate'
      className='header'
    >
        <Link href='/' className="header-logo">DwayneDiddy</Link>
        <title>Dwaynediddy portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <ul>
            <Link href='about'>About</Link>
            <Link href='contact'>Contact</Link>
            <Link href='project'>Projects</Link>
        </ul>
        <span className="header-socials">
            <Link href='/'>
              <AiFillLinkedin className='social-btn' />  
            </Link>
            <Link href='/'>
              <AiFillTwitterSquare className='social-btn' />     
            </Link>
            <Link href='/'>
              <AiOutlineGithub className='social-btn' />   
            </Link>
        </span>
    </motion.nav>
  )
}

export default Head