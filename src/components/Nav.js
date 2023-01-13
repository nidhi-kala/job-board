import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between align-middle sticky top-0">
      <h1>
        <Link className="link" to="/" id="logo">
          BlahBlahBoard
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/jobs/new"> Post a New Job</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
