import { TodayWeatherItem } from './TodayWeatherItem';
import { Grid, Divider, Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { format } from 'date-fns';
import { getWeatherProps } from '../utils/getWeatherProps';
import type { Weather } from '../types';

type TodayWeatherProps = {
  todayWeatherData: Weather;
};

export const TodayWeather = ({ todayWeatherData }: TodayWeatherProps) => (
  <Grid
    container
    my="1rem"
    sx={{ mb: { xs: '15px' }, justifyContent: { xs: 'center', lg: 'space-between' } }}
    bgcolor="#263238"
    boxShadow={3}
    borderRadius="20px"
    p="18px"
  >
    <Typography variant="h5" color={grey[400]} textTransform="uppercase" p="10px">
      Today&apos; s forecast
    </Typography>

    <Grid container alignItems="center" justifyContent="center">
      {todayWeatherData.map(({ time, temperature, weatherCode, isDay }, index) => (
        <Grid item xs={2} key={index}>
          <Box display="flex">
            <TodayWeatherItem
              time={format(new Date(time), 'h:mm a')}
              temperature={temperature}
              image={getWeatherProps(weatherCode, isDay).image}
            />
            {index < todayWeatherData.length - 1 && (
              <Divider variant="middle" sx={{ bgcolor: grey[400] }} orientation="vertical" flexItem />
            )}
          </Box>
        </Grid>
      ))}
    </Grid>
  </Grid>
);
