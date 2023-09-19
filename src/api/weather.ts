import axios from 'axios';
import type { AxiosResponse } from 'axios';

import type { Today, Weekly } from '../types';

export const getTodayWeather = (lat: GLfloat, lon: GLfloat): Promise<AxiosResponse<Today>> =>
  axios.get<Today>(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,apparent_temperature,rain,weathercode,windspeed_10m,uv_index,is_day&forecast_days=1&timezone=auto`,
  );

export const getWeeklyWeather = (lat: GLfloat, lon: GLfloat): Promise<AxiosResponse<Weekly>> =>
  axios.get<Weekly>(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`,
  );
