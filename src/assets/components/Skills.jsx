import logoHTML from "../images/Skills/html.png";
import logoCSS from "../images/Skills/css.png";
import logoSASS from "../images/Skills/sass.png";
import logoJS from "../images/Skills/js.png";
import logoREACT from "../images/Skills/react.png";
import logoREDUX from "../images/Skills/redux.png";

function Skills() {
  
  const skillsList = [
    logoHTML,
    logoCSS,
    logoSASS,
    logoJS,
    logoREACT,
    logoREDUX,
  ];

  return (
    <section className="skills">
      <h2>MY SKILLS</h2>
        <ul className="skills__list">
          {skillsList.map((skill, index) => (
            <li key={"skill" + index}className="skills__element">
                <img src={skill} alt="Techno logo"></img>
            </li>
          ))}
        </ul>
    </section>
  );
}

export default Skills