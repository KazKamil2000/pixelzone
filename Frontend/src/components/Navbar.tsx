import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        PixelZone
      </Link>
      <ul>
        <Navigation to="/">Home</Navigation>
        <Navigation to="/profile">Profile</Navigation>
      </ul>
    </nav>
  );
}

type NavigationProps = {
  to: string;
  children: React.ReactNode;
  [key: string]: any;
};

function Navigation({ to, children, ...props }: NavigationProps) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
