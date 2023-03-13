import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';

import Button from '../Button';
import { MoonIcon, SunIcon } from '../../../shared/icons/index';
import { iconVariants, buttonVariants } from '../../../shared/motion/variants';


const Theme = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <>
            <AnimatePresence>
                <Button
                    onClick={toggleTheme}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    whileTap="tap"
                    variants={buttonVariants}
                    style={{ paddingBottom: '8px', }}
                >
                    {theme === 'dark' && (
                        <motion.div
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}
                            variants={iconVariants}
                            transition={{
                                type: 'spring',
                                stiffness: 150,
                                damping: 15,
                                mass: 0.2
                            }}
                        >
                            <SunIcon />
                        </motion.div>
                    )}
                    {theme === 'light' && (
                        <motion.div
                            variants={iconVariants}
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}
                            transition={{
                                type: 'spring',
                                stiffness: 150,
                                damping: 15,
                                mass: 0.2
                            }}
                        >
                            <MoonIcon />
                        </motion.div>
                    )}
                </Button>
            </AnimatePresence>
        </>
    );
}

export default Theme;


// https://codepen.io/mrozilla/pen/OJJNjRb?editors=0110