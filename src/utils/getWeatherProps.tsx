import sunny from '../assets/sunny.png';
import moon from '../assets/night.png';
import cloudy1 from '../assets/partly-cloudy.png';
import cloudy2 from '../assets/partly-cloudy-2.png';
import cloudy from '../assets/cloudy.png';
import cloudynight from '../assets/cloudy-night.png';
import rain from '../assets/rain.png';
import rainnight from '../assets/rain-night.png';
import snow from '../assets/snow.png';
import snownight from '../assets/snow-night.png';
import thunder from '../assets/thunder.png';

type weatherProps = {
  image: string;
  description: string;
};

export function getWeatherProps(value = 0, isDay: number): weatherProps {
  if (value === 0 && isDay === 1)
    return {
      image: sunny,
      description: 'Sunny',
    };
  if (value === 0 && isDay === 0)
    return {
      image: moon,
      description: 'Clear',
    };
  if (value === 1 || (value === 2 && isDay === 1)) {
    return {
      image: cloudy1,
      description: 'Partly Cloudy',
    };
  }
  if (value === 3 && isDay === 1) {
    return {
      image: cloudy2,
      description: 'Cloudy',
    };
  }
  if (value > 3 && value <= 48 && isDay === 1) {
    return {
      image: cloudy,
      description: 'Mostly Cloudy',
    };
  }
  if (value >= 1 && value <= 48 && isDay === 0) {
    return {
      image: cloudynight,
      description: 'Cloudy',
    };
  }
  if ((value >= 51 && value <= 67 && isDay === 1) || (value >= 80 && value <= 82 && isDay === 1)) {
    return {
      image: rain,
      description: 'Rain',
    };
  }
  if ((value >= 51 && value <= 67 && isDay === 0) || (value >= 80 && value <= 82 && isDay === 0)) {
    return {
      image: rainnight,
      description: 'Rain',
    };
  }
  if ((value >= 71 && value <= 77 && isDay === 1) || (value >= 85 && value <= 86 && isDay === 1)) {
    return {
      image: snow,
      description: 'Snow',
    };
  }
  if ((value >= 71 && value <= 77 && isDay === 0) || (value >= 85 && value <= 86 && isDay === 0)) {
    return {
      image: snownight,
      description: 'Snow',
    };
  }
  if (value >= 95 && value <= 99) {
    return {
      image: thunder,
      description: 'Thunderstorm',
    };
  }
  return {
    image: sunny,
    description: 'Sunny',
  };
}
