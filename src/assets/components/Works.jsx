import ohMyFoodImg from "../images/Works/OhMyFood.png";
import kasaImg from "../images/Works/Kasa.png";
import argentBankImg from "../images/Works/Argent Bank.png";
import { useEffect } from "react";
function Works({ worksRef }) {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const works = entry.target.querySelectorAll(".work__element")
      works.forEach((work) =>{
        if (entry.isIntersecting) {
          work.classList.add("animation");
        } else {
          work.classList.remove("animation");
        }
      })
      
    });
  });

  useEffect(() => {
    observer.observe(document.querySelector(".work__list"));
  }, []);

  const worksList = [
    {
      title: "OhMyFood",
      date: "mm.aaaa",
      tags: ["SASS", "Animation", "Responsive"],
      imageSrc: ohMyFoodImg,
      imageAlt: "ohMyFood Thumbnail",
    },
    {
      title: "Kasa",
      date: "mm.aaaa",
      tags: ["React", "Fetch API", "Responsive"],
      imageSrc: kasaImg,
      imageAlt: "Kasa Thumbnail",
    },
    {
      title: "ArgentBank",
      date: "mm.aaaa",
      tags: ["React", "Redux", "Swagger Editor"],
      imageSrc: argentBankImg,
      imageAlt: "ArgentBank Thumbnail",
    },
  ];
  return (
    <section className="work" id="work" ref={worksRef}>
      <h2>MY WORK</h2>
      <ul className="work__list">
        {worksList.map((work) => (
          <li key={work.title} className={"work__element " + work.title}>
            <img src={work.imageSrc} alt={work.imageAlt}></img>
            <div className="work__details">
              <p className="date">{work.date}</p>
              <h3>{work.title}</h3>
              <ul className="work__tagsList">
                {work.tags.map((tag, index) => (
                  <li key={tag + index} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Works;
