function Navbar({ lobbyRef, worksRef, experienceRef, contactRef }) {
  const scrollTo = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  let initialPos = window.scrollY;
  const scrollDown = () => {
    const newPos = window.scrollY;
    if (newPos > 0) {
      scrollTo(worksRef.current);
    }
    if (newPos > worksRef.current.offsetTop) {
      scrollTo(experienceRef.current);
    }
    if (newPos > experienceRef.current.offsetTop) {
      scrollTo(contactRef.current);
    }
  };
  const scrollUp = () => {
    if (initialPos <= contactRef.current.offsetTop) {
      scrollTo(experienceRef.current);
    }
    if (initialPos <= experienceRef.current.offsetTop) {
      scrollTo(worksRef.current);
    }
    if (initialPos <= worksRef.current.offsetTop) {
      scrollTo(lobbyRef.current);
    }
  };
  window.onscroll = () => {
    if (initialPos < window.scrollY){
      scrollDown()
    }
    else{
      scrollUp()
    }
    initialPos = window.scrollY
  } 

  //const refPos = [lobbyRef, worksRef, experienceRef, contactRef];
  // window.addEventListener("scroll", () => {
  //   const oldPos = window.scrollY
  //   //console.log("old: "+initialPos, "new: "+updatedPos)
  //   if (updatedPos > initialPos) {
  //     //scrollDown()
  //   }
  //   if (updatedPos < initialPos) {
  //     console.log("old: "+initialPos, "new: "+updatedPos)
  //     scrollUp()
  //   }
  // })

  const switchTheme = () => {
    const app = document.getElementById("app");
    const themeIcon = document.querySelector(".themeswitch");
    console.log("themeSwitch");
    app.classList.toggle("dark");
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
