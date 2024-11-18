import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <Link to="/"> Home </Link>
      <br />
      <Link to={'/form'}>Wines</Link>
      <br />
    </div>
  );
}
