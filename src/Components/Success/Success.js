import React from 'react';
import { Box } from '@mui/system';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
const Success = () => {
    return (
        <Box sx={{ textAlign: 'center', padding: '40px 0', backgroundColor: '#EBF0F5' }}>
            <Box sx={{ backgroundColor: 'white', padding: '60px', borderRadius: '4px', boxShadow: '0 2px 3px #C8D0D8', display: 'inline-block', margin: '0 auto' }}>
                <Box sx={{ borderRadius: '200px', height: '200px', width: '200px', backgroundColor: '#F8FAF5', margin: '0 auto' }}>
                    <Box sx={{
                        color: '#9ABC66',
                        fontSize: '100px',
                        lineHeight: '200px',
                        marginLeft: '-15px'
                    }}><DoneOutlineIcon /></Box>
                </Box>
                <h1>Success</h1>
                <p>We received your purchase request;<br /> we'll be in touch shortly!</p>
            </Box>
        </Box >
    );
};

export default Success;