export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">PixelZone</a>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </nav>
  );
}