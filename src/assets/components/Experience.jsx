function Experience({experienceRef}) {
  
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
    <section className="experience" id="experience" ref={experienceRef}>
      <h2>MY EXPERIENCE</h2>
      <ul className="experience__list">
        {experienceList.map((experience) => (
          <li key={experience.title} className="experience__element">
            <p className="experience__name">{experience.title}</p>
            <hr />
            <p className="date">{experience.date}</p>
          </li>
        ))}
      </ul>
      <span>. . .</span>
    </section>
  );
}

export default Experience;
