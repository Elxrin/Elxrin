import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

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
                    <div></div>

                    <Stack>
                        <Theme/>
                        {/* <Button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <FaTimes size={28} /> : <IoIosMenu size={28} />}
                        </Button> */}
                    </Stack>
                </Box>
                {isOpen && (<div></div>)}
            </Appbar>
        </AnimatePresence>
    );
}

export default Header;

