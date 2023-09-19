import { Box, Button, Grid, Typography } from '@mui/material';

const popularCities = [
  'Tokyo',
  'Delhi',
  'Shanghai',
  'São Paulo',
  'Mumbai',
  'Beijing',
  'Cairo',
  'Dhaka',
  'Mexico City',
  'Osaka',
  'Karachi',
  'Istanbul',
  'Buenos Aires',
  'Manila',
  'Rio de Janeiro',
  'Moscow',
  'Jakarta',
  'London',
  'Lima',
  'Bangkok',
  'New York City',
  'Nairobi',
  'Hong Kong',
  'Paris',
  'Santiago',
  'Alexandria',
  'Los Angeles',
  'Shenyang',
];

export const Cities = () => {
  const clickHandler = (city: string) => {
    console.log(city);
  };

  return (
    <Box py="30px">
      <Box display="flex" flexDirection="column" gap="10px">
        {popularCities.map((city, index) => (
          <Grid item xs={12} key={index}>
            <Box
              display="flex"
              flexDirection="column"
              p="20px"
              borderRadius="20px"
              justifyContent="center"
              alignItems="center"
              bgcolor="#263238"
            >
              <Button onClick={() => clickHandler(city)}>
                <Typography color="rgba(255, 255, 255, 0.87);" variant="h4">
                  {city}
                </Typography>
              </Button>
            </Box>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};
