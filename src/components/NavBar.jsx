function NavBar() {
  return (
    <nav id="nav">
      <div className="nav-logo">
        T<span>.</span>Ogunsakin
      </div>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#tech">Technology</a>
        </li>
        <li>
          <a href="#health">Health</a>
        </li>
        <li>
          <a href="#innovations">Innovations</a>
        </li>
        <li>
          <a href="#career">Career</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
