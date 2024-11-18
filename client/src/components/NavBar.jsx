import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <Link to="/"> Home </Link>
      <br />
      <Link to={'/wines'}>Wines</Link>
      <br />
      <Link to={'/vineyards'}>Vineyards</Link>
      <br />
      <Link to={'/about'}>About</Link>
    </div>
  );
}
