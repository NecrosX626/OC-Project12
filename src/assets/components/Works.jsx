import ohMyFoodImg from "../images/Works/OhMyFood.png";
import kasaImg from "../images/Works/Kasa.png";
import argentBankImg from "../images/Works/Argent Bank.png";
import { useEffect } from "react";
function Works({ worksRef }) {
  
  //Animation Works Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const works = entry.target.querySelectorAll(".work__element");
      works.forEach((work) => {
        if (entry.isIntersecting) {
          work.classList.add("animation");
        } else {
          work.classList.remove("animation");
        }
      });
    });
  });
  useEffect(() => {
    observer.observe(document.querySelector(".work__list"));
  }, [observer]);

  const worksList = [
    {
      title: "OhMyFood",
      date: "mm.aaaa",
      tags: ["SASS", "Animation", "Responsive"],
      imageSrc: ohMyFoodImg,
      imageAlt: "ohMyFood Thumbnail",
      description: "Application réalisée en approche mobile-first. Un projet centré sur les animations CSS et l'aspect responsive du site.",
      git: "https://github.com/NecrosX626/OC-Projet4",
      site: "",
    },
    {
      title: "Kasa",
      date: "mm.aaaa",
      tags: ["React", "Fetch API", "Responsive"],
      imageSrc: kasaImg,
      imageAlt: "Kasa Thumbnail",
      description: "Site de location entre particuliers. Un projet React demandant de communiquer avec le back-end pour récuperer les informations des differentes locations.",
      git: "https://github.com/NecrosX626/OC-Projet8",
      site: "",
    },
    {
      title: "ArgentBank",
      date: "mm.aaaa",
      tags: ["React", "Redux", "Swagger"],
      imageSrc: argentBankImg,
      imageAlt: "ArgentBank Thumbnail",
      description: "Site d'une banque en ligne. Un projet autour de Redux avec une gestion du state pour la connexion des utilisateurs et l'acces a leurs informations.",
      git: "https://github.com/NecrosX626/OC-Projet11",
      site: "",
    },
  ];

  return (
    <section className="work" id="work" ref={worksRef}>
      <h2>MY WORK</h2>
      <ul className="work__list">
        {worksList.map((work) => (
          <li key={work.title} className={"work__element " + work.title}>
            <img src={work.imageSrc} alt={work.imageAlt} />
            <div className="work__details">
              <p className="date">{work.date}</p>
              <a href={work.site}><h3>{work.title}</h3></a>
              <p className="work__desc">{work.description}</p>
              <a href={work.git}><i className="fa-brands fa-github fa-xl"></i></a>
              <ul className="work__tagsList">
                {work.tags.map((tag, index) => (
                  <li key={tag + index} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <a href={work.git}></a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Works;
