import { Routes, Route } from 'react-router-dom';

import Wines from './pages/Wine';
import Images from './images/img';

export default function KRoutes() {
  return (
    <Routes>
      {/* <Route index element={<Home/>}/> */}
      <Route path="/wines" element={<Wines />} />
      <Route path="/vineyards" element={<Images />} />
    </Routes>
  );
}
