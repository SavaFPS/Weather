import { Typography, Box } from "@mui/material";
import type { SvgIconProps } from "@mui/material";
import { grey } from "@mui/material/colors";

type AirConditionItemProps = {
  icon: React.ReactElement<SvgIconProps>;
  label: string;
  value: number | string;
  unit: string;
};

export const AirConditionItem = ({
  icon,
  label,
  value,
  unit,
}: AirConditionItemProps) => (
  <Box display="flex">
    <Box p="3px" color={grey[400]}>
      {icon}
    </Box>

    <Box display="flex" flexDirection="column" padding="3px" alignItems="start">
      <Typography color={grey[400]} textAlign="center" variant="h5">
        {label}
      </Typography>
      <Typography
        color="rgba(255, 255, 255, 0.87);"
        textAlign="center"
        variant="h4"
        fontWeight="600"
      >
        {value}
        {unit}
      </Typography>
    </Box>
  </Box>
);
