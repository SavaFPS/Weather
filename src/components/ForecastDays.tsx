import { useEffect, useState, useCallback } from "react";
import { getWeeklyWeather } from "../api/weather";
import { ForecastItem } from "../components";
import {
  Grid,
  Divider,
  Typography,
  Box,
  useMediaQuery,
  type Theme,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { format } from "date-fns";
import { getWeatherProps } from "../utils/getWeatherProps";
import type { Status, WeeklyItem } from "../types";

export type ForecastDaysProps = {
  lat: GLfloat;
  lon: GLfloat;
};

export const ForecastDays = ({ lat, lon }: ForecastDaysProps) => {
  const [weeklyData, setWeeklyData] = useState<WeeklyItem>();
  const [statusCode, setStatusCode] = useState<Status>("idle");
  const isSmallerThanLg = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const fetchWeaklyWeather = useCallback(async () => {
    setStatusCode("pending");
    try {
      const { data, status } = await getWeeklyWeather(lat, lon);

      if (status !== 200) {
        setStatusCode("error");
        return;
      }

      setStatusCode("success");
      setWeeklyData(data.daily);
    } catch (error) {
      setStatusCode("error");
    }
  }, [lat, lon]);

  useEffect(() => {
    void fetchWeaklyWeather();
  }, [fetchWeaklyWeather]);

  return (
    <>
      {statusCode === "error" && (
        <Box p="20px">
          <Typography variant="h6">
            Couldn&apos;t fetch weekly weather
          </Typography>
        </Box>
      )}
      {(statusCode === "idle" || statusCode === "pending") && <></>}
      {statusCode === "success" && (
        <Grid
          bgcolor="#263238"
          boxShadow={3}
          borderRadius="20px"
          height={1}
          p="10px"
        >
          <Box
            display="flex"
            alignItems="center"
            p="5px"
            width={1}
            sx={{ justifyContent: { xs: "center", lg: "space-between" } }}
          >
            <Typography
              variant="h5"
              sx={{ p: { xs: "0px", lg: "20px" } }}
              color={grey[400]}
              textTransform="uppercase"
            >
              7-day forecast
            </Typography>
          </Box>

          <Box
            overflow={isSmallerThanLg ? "scroll" : "none"}
            sx={{
              display: { xs: "flex", lg: "grid" },
            }}
          >
            {/* eslint-disable @typescript-eslint/no-non-null-assertion  */}
            {weeklyData?.time.map((item, index) => (
              <Box key={index} sx={{ display: { xs: "flex", lg: "block" } }}>
                <ForecastItem
                  day={index === 0 ? "Today" : format(new Date(item), "EEE")}
                  image={
                    getWeatherProps(weeklyData.weathercode[index], 1).image
                  }
                  description={
                    getWeatherProps(weeklyData.weathercode[index], 1)
                      .description
                  }
                  maxTemperature={weeklyData.temperature_2m_max[index]!}
                  minTemperature={weeklyData.temperature_2m_min[index]!}
                />

                {index < weeklyData.time.length - 1 && (
                  <Divider
                    flexItem
                    variant="middle"
                    orientation={isSmallerThanLg ? "vertical" : "horizontal"}
                    sx={{ bgcolor: grey[400] }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Grid>
      )}
    </>
  );
};
