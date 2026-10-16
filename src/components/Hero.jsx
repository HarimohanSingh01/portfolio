

function Hero({data}) {
  return (
    <section id="home" className="hero">
      <div className="glow glow-purple"></div>
      <div className="glow glow-blue"></div>

      <div className="container hero-inner">
        <div>
          <p className="hero-greeting"></p>
          <h1 className="hero-title gradient-text"></h1>
          <p className="hero-text">{data.tagline}</p>

          <a className="btn btn-primary"></a>

          <div className="social-icons">
            <a className="icon-link" href={data.socials .github}><Github size={20} /></a>
            <a className="icon-link"href={data.socials .github}><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="hero-photo">n     
          <img />
        </div>
      </div>
    </section>
  );
}

export default Hero;
