export default function Navbar({ name }) {
  return (
    <header className="navbar">
      <a href="#home" className="logo">{name}</a>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}