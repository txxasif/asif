"use client"
import { motion,AnimatePresence } from "framer-motion"
type Props = {
    children: string | JSX.Element | JSX.Element[] | JSX.Element
  }
export default function MotionProvider({children} : Props){
    return(
        <AnimatePresence>
            <motion.div
            initial={{opacity:0,y:15}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:15}}
            transition={{delay:0.40}}>
                {children}
            </motion.div>
        </AnimatePresence>
    )
}