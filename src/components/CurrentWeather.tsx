import { Box, ImageListItem, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { getWeatherProps } from '../utils/getWeatherProps';
import type { CurrentItem } from '../types';

type CurrentWeatherProps = {
  currentWeatherData: CurrentItem;
  cityName: string;
};

export const CurrentWeather = ({ currentWeatherData, cityName }: CurrentWeatherProps) => {
  const { chanceOfRain, temperature, weatherCode, isDay } = currentWeatherData;
  return (
    <Box display="flex" justifyContent="space-between" p="40px">
      <Box display="flex" justifyContent="space-between" flexDirection="column">
        <Box>
          <Typography color="rgba(255, 255, 255, 0.87);" variant="h2">
            {cityName}
          </Typography>
          <Typography color={grey[400]} variant="h6">
            Chance of rain: {chanceOfRain}%
          </Typography>
        </Box>
        <Typography variant="h2" color="rgba(255, 255, 255, 0.87);">
          {temperature}°
        </Typography>
      </Box>
      <ImageListItem sx={{ width: { xs: '150px', lg: '200px' } }}>
        <img alt="SUN" src={getWeatherProps(weatherCode, isDay).image} />
      </ImageListItem>
    </Box>
  );
};
