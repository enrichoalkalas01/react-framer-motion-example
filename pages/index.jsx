import { useState } from 'react'
import '../public/style.css'
import { motion } from 'framer-motion'

const index = () => {
    const [rotate, setRotate] = useState(false)
    const [moveX, setMoveX] = useState(false)
    const [moveY, setMoveY] = useState(false)
    return(
        <>
            <div className="container">
                <motion.div
                    // initial={{ scale: 0, rotate: 0 }}
                    animate={{ rotate: rotate ? 360: 0 }}
                >
                    <div className='block' onClick={ () => setRotate(!rotate) }></div>
                </motion.div>
            </div>
            <div className="container">
                <motion.div
                    // initial={{ scale: 0, rotate: 0 }}
                    animate={{ x: moveX ? 200: -200 }}
                >
                    <div className='block' onClick={ () => setMoveX(!moveX) }></div>
                </motion.div>
            </div>
            <div className="container">
                <motion.div
                    // initial={{ scale: 0, rotate: 0 }}
                    animate={{ y: moveY ? 200: -200 }}
                    // transition={{ delay: 1 }}
                    // transition={{ type: 'tween', duration: 5 }}
                    // transition={{ type: 'spring', duration: 1 }}
                    // transition={{ type: 'spring', bounce: 10 }}
                    transition={{ type: 'intertia', velocity: 40 }}
                >
                    <div className='block' onClick={ () => setMoveY(!moveY) }></div>
                </motion.div>
            </div>
            <div className="container">
                <motion.div
                    whileHover={{ scale: 2}}
                >
                    <div className='block'></div>
                </motion.div>
            </div>
            <div className="container">
                <motion.div
                    drag
                    whileDrag={{ scale: 1}}
                    dragConstraints={{ left: -25, right: -25, top: -25, bottom: -25 }}
                >
                    <div className='block'></div>
                </motion.div>
            </div>
            <div className="container">
                <motion.div
                    animate={{ rotate: [0, 200, 200, 0], x: [0, 200, 200, 0, -200, -200, 0] }}
                    transition={{ duration: 1, repeat: Infinity, }}
                >
                    <div className='block'></div>
                </motion.div>
            </div>
        </>
    )
}

export default index