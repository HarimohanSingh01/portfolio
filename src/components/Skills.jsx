function Skills(skills) {
  return (
    <section id="skills" className="section dark-section">
      <div className="container">
        <h2 className="section-title">My<span className="gradient-text">skills</span></h2>

        <div className="grid">
          {
          <div className="card">
            <h3></h3>
            <div className="badges">
            {
              group.items.map((item)=>(
                <span className="badge" key= {item}>{item}</span>
              ))
            }
            </div>
          </div>}
        </div>
      </div>
    </section>
  );
}

export default Skills;
