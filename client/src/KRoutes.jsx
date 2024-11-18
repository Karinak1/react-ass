import { Routes, Route } from 'react-router-dom';

import Images from './images/img';
// import Data from './components/data';
// import Form from './components/form';

export default function KRoutes() {
  return (
    <Routes>
      {/* <Route path="/wines" element={<Form />} /> */}
      <Route path="/" element={<Images />} />
      {/* <Route path="/wines" element={<Data />} /> */}
    </Routes>
  );
}
