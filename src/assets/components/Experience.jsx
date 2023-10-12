function Experience() {
  const experienceList = [
    {
      title: "Formation Intégrateur Web - OpenClassrooms",
      date: "mm.aaaa - mm.aaaa",
    },
    {
      title: "Projet Micro-Folies - Service Civique",
      date: "mm.aaaa - mm.aaaa",
    },
  ];

  return (
    <section className="experience" id="experience">
      <h2>MY EXPERIENCE</h2>
      <ul className="experience__list">
        {experienceList.map((experience) => (
          <li key={experience.title} className="experience__element">
            <h3>{experience.title}</h3>
            <hr />
            <p>{experience.date}</p>
          </li>
        ))}
      </ul>
      <span>. . .</span>
    </section>
  );
}

export default Experience;
