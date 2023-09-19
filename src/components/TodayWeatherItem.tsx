import { Typography, Grid, ImageListItem, Box } from '@mui/material';
import { grey } from '@mui/material/colors';

type TodayWeatherItemProps = {
  time: string;
  temperature: number;
  image: string;
};

export const TodayWeatherItem = ({ time, temperature, image }: TodayWeatherItemProps) => (
  <Grid container flexDirection="column" alignItems="center" justifyContent="space-between">
    <Typography color={grey[400]} textAlign="center" fontWeight="700" variant="h6">
      {time}
    </Typography>

    <Box py="3px">
      <ImageListItem sx={{ width: { xs: '40px', lg: '50px' } }}>
        <img alt="weather" src={image} />
      </ImageListItem>
    </Box>

    <Typography color="rgba(255, 255, 255, 0.87);" textAlign="center" variant="h4" fontWeight="400">
      {temperature.toFixed()}°
    </Typography>
  </Grid>
);
