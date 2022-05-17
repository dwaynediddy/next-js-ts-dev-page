import { Variants } from "framer-motion"

export const fadeIn = (direction: 'up' | 'down' = 'up'): Variants => {
    return {
        initial: {
            y: direction === 'up' ? 40 : -60,
            opacity: 0,
        },

        animate: {
            y: 0,
            opacity: 1,
            
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            }
        }
    }
}

export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.5,
            delayChildren: 0.7,
        }
    }
}
