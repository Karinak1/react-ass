import { Route, Routes, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Wines from './pages/Wine';
import KRoutes from './KRoutes';
import Data from './components/data';
import Images from './images/img';
import Form from './components/form';

export default function App() {
  return (
    <div>
      {/* <h2>Vineyards</h2> */}
      <NavBar />
      <Form />
      <Wines />
      <KRoutes />
      <Data />
      <Images />
    </div>
  );
}
