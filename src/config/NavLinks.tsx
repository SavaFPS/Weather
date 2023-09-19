import { MapTwoTone, FormatListBulleted, WbSunny, Tune } from '@mui/icons-material';

export const navLinks = [
  {
    key: 'weather',
    title: 'Weather',
    icon: <WbSunny fontSize="large" />,
    to: '/',
  },
  {
    key: 'cities',
    title: 'Cities',
    icon: <FormatListBulleted fontSize="large" />,
    to: '/cities',
  },
  {
    key: 'map',
    title: 'Map',
    icon: <MapTwoTone fontSize="large" />,
    to: '/map',
  },
  {
    key: 'settings',
    title: 'Settings',
    icon: <Tune fontSize="large" />,
    to: '/settings',
  },
];
