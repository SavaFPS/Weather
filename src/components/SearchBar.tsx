import { useState } from 'react';
import { Box, IconButton, InputBase } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Search } from '@mui/icons-material';
import { getLongAndLat } from '../api/city';
import type { Status } from '../types';

type SearchBarProps = {
  setLatAndLon: (lat: GLfloat, lon: GLfloat) => void;
  setCityName: (name: string) => void;
  onFetch: (value: Status) => void;
};

export const SearchBar = ({ setLatAndLon, setCityName, onFetch }: SearchBarProps) => {
  const [searchData, setSearchData] = useState<string>('');
  const fetchCityData = async () => {
    if (searchData === '') return;
    onFetch('pending');
    const { data, status } = await getLongAndLat(searchData);

    if (status !== 200 || data.length === 0) {
      onFetch('error');
      return;
    }
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    setLatAndLon(data[0]!.latitude, data[0]!.longitude);
    setCityName(data[0]!.name);
    onFetch('success');
    setSearchData('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      void fetchCityData();
    }
  };

  return (
    <Box display="flex" gap="10px">
      <InputBase
        fullWidth
        size="medium"
        placeholder="Search for cities"
        sx={{
          fontSize: { xs: '12px', lg: '20px' },

          color: grey[400],
          bgcolor: '#263238',
          boxShadow: 3,
          borderRadius: '50px',
          p: '10px',
        }}
        value={searchData}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <IconButton
        onClick={() => void fetchCityData()}
        sx={{
          color: grey[400],
          bgcolor: '#263238',
          boxShadow: 3,
          borderRadius: '50px',
          p: '15px',
          '&:hover': {
            background: '#263238',
          },
        }}
      >
        <Search fontSize="large" />
      </IconButton>
    </Box>
  );
};
