import type { SvgIconProps } from '@mui/material';
import type { ReactElement } from 'react';

export type Today = {
  hourly: {
    time: string[];
    temperature_2m: number[];
    apparent_temperature: number[];
    rain: number[];
    weathercode: number[];
    windspeed_10m: number[];
    uv_index: number[];
    is_day: number[];
  };
};

export type Weather = WeatherItem[];
export type Condition = ConditionItem[];
export type Current = CurrentItem[];

export type WeatherItem = {
  time: string;
  temperature: number;
  weatherCode: number;
  isDay: number;
};

export type CurrentItem = {
  temperature: number;
  chanceOfRain: number;
  weatherCode: number;
  isDay: number;
};

export type ConditionItem = {
  realFeel: number | string;
  wind: number | string;
  chanceOfRain: number | string;
  uvIndex: number;
  weatherCode: number;
  isDay: number;
};

export type Status = 'idle' | 'success' | 'error' | 'pending';

export type Weekly = {
  daily: WeeklyItem;
};

export type WeeklyItem = {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weathercode: number[];
};

export type cityResponse = {
  name: string;
  latitude: GLfloat;
  longitude: GLfloat;
};

export type TodayWeather = {
  icon: ReactElement<SvgIconProps>;
  label: string;
  key: keyof ConditionItem;
  unit: string;
};
