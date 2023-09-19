import { useState } from 'react';
import { Box, IconButton } from '@mui/material';

export const Settings = () => {
  const [bgColor, setBgColor] = useState('#15874c');

  const handleClick = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <Box display="flex" justifyContent="center" bgcolor={bgColor}>
      <IconButton disableRipple sx={{ width: '100vp', height: '86vh' }} onClick={handleClick}>
        Click me
      </IconButton>
    </Box>
  );
};
