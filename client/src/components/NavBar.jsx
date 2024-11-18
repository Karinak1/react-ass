import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <Link to="/"> Home </Link>
      <br />
      <Link to={'/wine'}>Wines</Link>
      <br />
    </div>
  );
}
