function Navbar({ lobbyRef, worksRef, experienceRef, contactRef }) {

  const scrollTo = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const switchTheme = () => {
    const themeIcon = document.querySelector(".themeswitch");
    const app = document.getElementById("app");
    const lobby = document.getElementById("lobby")
    app.classList.toggle("dark");
    lobby.classList.toggle("dark");
    if (app.classList.contains("dark")) {
      themeIcon.classList = "fa-solid fa-sun fa-xl themeswitch";
    } else {
      themeIcon.classList = "fa-solid fa-moon fa-xl themeswitch";
    }
  };

  return (
    <nav>
      <ul>
        <li
          onClick={() => {
            scrollTo(lobbyRef.current);
          }}
        >
          <i className="fa-solid fa-user-tie fa-xl"></i>
        </li>
        <li
          onClick={() => {
            scrollTo(worksRef.current);
          }}
        >
          <i className="fa-solid fa-code fa-xl"></i>
        </li>
        <li
          onClick={() => {
            scrollTo(experienceRef.current);
          }}
        >
          <i className="fa-solid fa-graduation-cap fa-xl"></i>
        </li>
        <li
          onClick={() => {
            scrollTo(contactRef.current);
          }}
        >
          <i className="fa-solid fa-address-card fa-xl"></i>
        </li>
        <li onClick={switchTheme}>
          <i className="fa-solid fa-moon fa-xl themeswitch"></i>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
