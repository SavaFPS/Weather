import { Box, Grid, ImageListItem, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

type ForecastItemProps = {
  day: string;
  description: string;
  maxTemperature: number;
  minTemperature: number;
  image: string;
};

export const ForecastItem = ({ day, description, image, maxTemperature, minTemperature }: ForecastItemProps) => (
  <Grid
    display="flex"
    sx={{
      flexDirection: { xs: 'column', lg: 'row' },
    }}
    alignItems="center"
    bgcolor="transparent"
    p="18px"
    gap="5px"
  >
    <Grid item lg={6} xs={6} sx={{ pr: { xs: '0px', lg: '5px' } }}>
      <Box
        gap="5px"
        display="flex"
        sx={{ flexDirection: { xs: 'column', lg: 'row' } }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h5" color={grey[400]}>
          {day}
        </Typography>
        <ImageListItem sx={{ width: { xs: '35px', lg: '50px' } }}>
          <img alt="SUN" src={image} />
        </ImageListItem>
      </Box>
    </Grid>

    <Grid item lg={6} xs={6} sx={{ pl: { xs: '0px', lg: '5px' } }}>
      <Box
        display="flex"
        sx={{ flexDirection: { xs: 'column', lg: 'row' } }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography sx={{ display: { xs: 'none', lg: 'flex' } }} color="rgba(255, 255, 255, 0.87);" variant="h6">
          {description}
        </Typography>
        <Box display="flex" justifyContent="end">
          <Typography variant="h5" color="rgba(255, 255, 255, 0.87);">
            {Math.round(maxTemperature)}
          </Typography>
          <Typography variant="h5" color={grey[400]}>
            /{Math.round(minTemperature)}
          </Typography>
        </Box>
      </Box>
    </Grid>
  </Grid>
);
export default ForecastItem;
