import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { IoIosMenu } from 'react-icons/io';
import { FaTimes } from 'react-icons/fa';

import Button from '../Button';
import { Appbar, Box, Stack } from './styles';
import Theme from '../Theme';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <AnimatePresence mode="wait">
            <Appbar 
                open={isOpen} 
                height={isOpen ? '500px' : '63px' }
                initial={{ height: '63px', }}
                animate={{ height: isOpen ? '500px' : '63px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }}
                exit={{ height: '63px' }}
            >
                <Box>
                    <div>Logo</div>

                    <Stack>
                        <Theme/>
                        <Button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <FaTimes size={28} /> : <IoIosMenu size={28} />}
                        </Button>
                    </Stack>
                </Box>
                {isOpen && (<div></div>)}
            </Appbar>
        </AnimatePresence>
    );
}

export default Header;

// https://codepen.io/mrozilla/pen/OJJNjRb

