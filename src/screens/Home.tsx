import { useEffect, useState, useCallback } from 'react';
import { getTodayWeather } from '../api/weather';
import { AirCondition, CurrentWeather, TodayWeather, ForecastDays, SearchBar } from '../components';
import { getIndexOfCurrentTime } from '../utils/getIndex';
import { Box, Grid, Typography, CircularProgress } from '@mui/material';
import type { Weather, ConditionItem, CurrentItem, Status } from 'types';
import { grey } from '@mui/material/colors';

const indexOfCurrentTime = getIndexOfCurrentTime();

export const Home = () => {
  const [todayData, setTodayData] = useState<Weather>([]);
  const [conditionData, setConditionData] = useState<ConditionItem>();
  const [currentData, setCurrentData] = useState<CurrentItem>();
  const [statusCode, setStatusCode] = useState<Status>('idle');

  const [lat, setLat] = useState(40.42);
  const [lon, setLon] = useState(-3.7);
  const [cityName, setCityName] = useState('Madrid');

  const setLatAndLon = (lat: GLfloat, lon: GLfloat) => {
    setLat(lat);
    setLon(lon);
  };

  const fetchDailyWeather = useCallback(async () => {
    setStatusCode('pending');
    try {
      const { data, status } = await getTodayWeather(lat, lon);

      if (status !== 200) {
        setStatusCode('error');
        return;
      }

      setStatusCode('success');

      /* eslint-disable @typescript-eslint/no-unnecessary-condition */
      setTodayData(
        data.hourly.time
          .map((item, index) => ({
            time: item,
            temperature: data.hourly.temperature_2m[index] ?? 0,
            weatherCode: data.hourly.weathercode[index] ?? 0,
            isDay: data.hourly.is_day[index] ?? 0,
            index,
          }))
          .slice(6, 22)
          .filter((item, index) => index % 3 === 0 && item),
      );

      /* eslint-disable @typescript-eslint/no-non-null-assertion */
      setConditionData(
        data.hourly.apparent_temperature.map((item, index) => ({
          realFeel: item,
          wind: data.hourly.windspeed_10m[index]!,
          chanceOfRain: data.hourly.rain[index]!,
          uvIndex: data.hourly.uv_index[index]!,
          weatherCode: data.hourly.weathercode[index]!,
          isDay: data.hourly.is_day[index]!,
        }))[indexOfCurrentTime],
      );
      /* eslint-disable @typescript-eslint/no-non-null-assertion */
      setCurrentData(
        data.hourly.temperature_2m.map((item, index) => ({
          temperature: item,
          chanceOfRain: data.hourly.rain[index]!,
          weatherCode: data.hourly.weathercode[index]!,
          isDay: data.hourly.is_day[index]!,
        }))[indexOfCurrentTime],
      );
    } catch (error) {
      setStatusCode('error');
    }
  }, [lat, lon]);

  useEffect(() => {
    void fetchDailyWeather();
  }, [fetchDailyWeather]);

  return (
    <>
      <Grid container>
        <Grid item lg={7} xs={12}>
          <SearchBar onFetch={(value) => setStatusCode(value)} setLatAndLon={setLatAndLon} setCityName={setCityName} />
        </Grid>
      </Grid>
      {statusCode === 'error' && (
        <Box p="20px">
          <Typography variant="h6">Provide a valid name of the City</Typography>
        </Box>
      )}
      {(statusCode === 'idle' || statusCode === 'pending') && (
        <Box display="flex" m="100px">
          <CircularProgress size={150} sx={{ color: grey[400] }} />
        </Box>
      )}

      {statusCode === 'success' && (
        <Grid container gap={2}>
          <Grid item lg={7} xs={12}>
            {currentData && <CurrentWeather currentWeatherData={currentData} cityName={cityName} />}
            <TodayWeather todayWeatherData={todayData} />
            {conditionData && <AirCondition airConditionData={conditionData} />}
          </Grid>

          <Grid item lg={4} xs={12}>
            <ForecastDays lat={lat} lon={lon} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

// const isSmallerThanLg = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
