import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { navLinks } from '../config/NavLinks';
import { Box, IconButton, Drawer, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Menu, Close } from '@mui/icons-material';

type titleProps = {
  setTitle: (title: string) => void;
};

export const HamburgerMenu = ({ setTitle }: titleProps) => {
  const navigate = useNavigate();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeLink, setAcitiveLink] = useState('weather');

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const onClick = (key: string, to: string, title: string) => {
    setTitle(title);
    setAcitiveLink(key);
    navigate(to);
  };

  return (
    <>
      <IconButton
        onClick={handleDrawerOpen}
        sx={{
          color: grey[400],
          bgcolor: '#263238',
          boxShadow: 3,
          borderRadius: '50px',
          p: '15px',
          '&:hover': {
            background: '#263238',
          },
        }}
      >
        <Menu fontSize="large" />
      </IconButton>

      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
        <Box display="flex" justifyContent="end" sx={{ bgcolor: '#263b45' }} onClick={handleDrawerClose}>
          <IconButton>
            <Close fontSize="large" sx={{ color: grey[500] }} />
          </IconButton>
        </Box>
        <Box display="flex" flexDirection="column" sx={{ width: '150px', height: '100%', bgcolor: '#263b45' }}>
          {navLinks.map(({ key, title, icon, to }) => (
            <Box display="flex" alignItems="center" key={key}>
              <IconButton disableRipple={true} onClick={() => onClick(key, to, title)}>
                <Box color={activeLink === key ? 'rgba(255, 255, 255, 0.87);' : grey[500]}>{icon}</Box>
                <Typography
                  p="5px 10px"
                  sx={{ '&:hover': { transition: '0.7s' } }}
                  color={activeLink === key ? 'rgba(255, 255, 255, 0.87);' : grey[500]}
                  variant="h4"
                >
                  {title}
                </Typography>
              </IconButton>
            </Box>
          ))}
        </Box>
      </Drawer>
    </>
  );
};
