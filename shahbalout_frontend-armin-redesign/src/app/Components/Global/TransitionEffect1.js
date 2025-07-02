'use client';
import { motion, AnimatePresence } from 'framer-motion';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs
 */

const TransitionEffect1 = ({ children }) => {
    return (
        <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
};

export default TransitionEffect1;
