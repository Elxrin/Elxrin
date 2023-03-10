import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Button from '../Button';
import { useTheme } from 'next-themes';
import { Appbar, Box, Stack, Testing } from './styles';
import { BsFillSunFill } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return (
        <AnimatePresence mode="wait">
            <Appbar 
                open={isOpen} 
                height={isOpen ? '500px' : '60px' }
                initial={{ height: '60px', }}
                animate={{ height: isOpen ? '500px' : '60px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }}
                exit={{ height: '60px' }}
            >
                <Box>
                    <div>Logo</div>

                    <Stack>
                        <Button onClick={toggleTheme}>
                            <BsFillSunFill/>
                        </Button>
                    </Stack>
                </Box>
                {isOpen && (<div></div>)}
            </Appbar>
        </AnimatePresence>
    );
}
 
export default Header;