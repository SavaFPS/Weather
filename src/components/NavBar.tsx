import { useState } from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import { Air } from '@mui/icons-material';
import { navLinks } from '../config/NavLinks';

export const NavBar = () => {
  const navigate = useNavigate();

  const [activeLink, setAcitiveLink] = useState('weather');

  const onClick = (key: string, to: string) => {
    setAcitiveLink(key);
    navigate(to);
  };

  return (
    <Grid item width={1} height="100%" bgcolor="#263238" boxShadow={3} borderRadius="20px" p="10px">
      <Box display="flex" flexDirection="column" textAlign="center">
        <IconButton disableRipple={true}>
          <Box
            sx={{ '&:hover': { bgcolor: '#a3d0e4', transition: 'all 0.7s' } }}
            color="#5355c9"
            bgcolor="#263b45"
            p="15px"
            borderRadius="20px"
          >
            <Air fontSize="large" />
          </Box>
        </IconButton>

        {navLinks.map(({ key, title, icon, to }) => (
          <IconButton disableRipple={true} key={key} onClick={() => onClick(key, to)}>
            <Box
              p="5px"
              borderRadius="20px"
              sx={{ '&:hover': { transition: '0.7s' } }}
              color={activeLink === key ? 'rgba(255, 255, 255, 0.87)' : grey[500]}
            >
              {icon}
              <Typography variant="subtitle1">{title}</Typography>
            </Box>
          </IconButton>
        ))}
      </Box>
    </Grid>
  );
};
