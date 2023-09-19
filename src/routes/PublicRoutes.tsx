import { Routes, Route } from 'react-router-dom';
import { Home, Cities, Map, Settings } from '../screens';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cities" element={<Cities />} />
      <Route path="/map" element={<Map />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};
