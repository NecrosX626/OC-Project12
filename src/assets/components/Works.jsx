import ohMyFoodImg from "../images/Works/OhMyFood.png";

function Works() {
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
      tags: ["React", "API Fetch", "Responsive"],
      imageSrc: ohMyFoodImg,
      imageAlt: "Kasa Thumbnail",
    },
    {
      title: "Argent Bank",
      date: "mm.aaaa",
      tags: ["React", "Redux", "Swagger Editor"],
      imageSrc: ohMyFoodImg,
      imageAlt: "Argent Bank Thumbnail",
    },
  ];
  return (
    <section className="work" id="work">
      <h2>MY WORK</h2>
      <ul className="work__list">
        {worksList.map((work) => (
          <li key={work.title} className="work__element">
            <img src={work.imageSrc} alt={work.imageAlt}></img>
            <div className="work__details">
              <p>{work.date}</p>
              <h3>{work.title}</h3>
              <ul className="work__tags">
                {work.tags.map((tag, index) => (
                  <li key={tag + index}className="work__tag">{tag}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Works