import { Routes, Route } from 'react-router-dom';

import Images from './images/img';
import Data from './components/data';
import Form from './components/form';

export default function KRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Images />} />
      <Route path="wine" element={<Data />} />
      <Route path="/wine" element={<Form />} />
    </Routes>
  );
}
