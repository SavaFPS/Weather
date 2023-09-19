import { Typography, Grid, Box, Button } from '@mui/material';
import { AirConditionItem } from '../components';
import { grey } from '@mui/material/colors';
import { DeviceThermostat, Air, WaterDrop, Brightness7 } from '@mui/icons-material';
import type { ConditionItem, TodayWeather } from '../types';

type AirConditionProps = {
  airConditionData: ConditionItem;
};

const todayWeather: TodayWeather[] = [
  { icon: <DeviceThermostat />, label: 'Real Feel', key: 'realFeel', unit: '°' },
  { icon: <Air />, label: 'Wind', key: 'wind', unit: ' km/h' },
  { icon: <WaterDrop />, label: 'Chance of rain', key: 'chanceOfRain', unit: '%' },
  { icon: <Brightness7 />, label: 'UV Index', key: 'uvIndex', unit: '' },
];

export const AirCondition = ({ airConditionData }: AirConditionProps) => (
  <Grid container bgcolor="#263238" boxShadow={3} borderRadius="20px" p="20px">
    <Box display="flex" width={1} sx={{ justifyContent: { xs: 'center', lg: 'space-between' } }}>
      <Typography pb="10px" variant="h5" color={grey[400]} textTransform="uppercase">
        Air Conditions
      </Typography>
      <Button
        href="https://www.accuweather.com/"
        size="small"
        sx={{ borderRadius: '50px', display: { xs: 'none', lg: 'grid' } }}
        variant="contained"
      >
        See more
      </Button>
    </Box>
    <Grid container>
      {todayWeather.map(({ key, label, icon, unit }, index) => (
        <Grid xs={6} item key={index}>
          <AirConditionItem icon={icon} label={label} unit={unit} value={airConditionData[key]} />
        </Grid>
      ))}
    </Grid>
    <Box display="flex" pt="15px" width={1} justifyContent="center">
      <Button
        href="https://www.accuweather.com/"
        size="large"
        sx={{ borderRadius: '50px', display: { xs: 'grid', lg: 'none' } }}
        variant="contained"
      >
        See more
      </Button>
    </Box>
  </Grid>
);
