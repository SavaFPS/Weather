import { Box, Typography } from '@mui/material';
import { HamburgerMenu } from './HamburgerMenu';
import { Air } from '@mui/icons-material';
import { useState } from 'react';

export const Header = () => {
  const [title, setTitle] = useState('Weather');

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p="10px">
      <Box
        sx={{
          color: '#5355c9',
          bgcolor: '#263238',
          boxShadow: 3,
          borderRadius: '50px',
          p: '15px',
        }}
      >
        <Air fontSize="large" />
      </Box>

      <Typography variant="h3" fontWeight="700" color="rgba(255, 255, 255, 0.87);">
        {title}
      </Typography>

      <HamburgerMenu setTitle={setTitle} />
    </Box>
  );
};
