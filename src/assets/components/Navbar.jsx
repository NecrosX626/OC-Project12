function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#lobby">
            <i className="fa-solid fa-user-tie fa-xl"></i>
          </a>
        </li>
        <li>
          <a href="#work">
            <i className="fa-solid fa-code fa-xl"></i>
          </a>
        </li>
        <li>
          <a href="#experience">
            <i className="fa-solid fa-graduation-cap fa-xl"></i>
          </a>
        </li>
        <li>
          <a href="#contact">
            <i className="fa-solid fa-address-card fa-xl"></i>
          </a>
        </li>
        <li>
          <i className="fa-solid fa-moon fa-xl themeswitch"></i>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
