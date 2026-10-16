import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section dark-section">
      <div className="container">
        <div className="card contact-card">
          <h2 className="section-title"><span className="gradient-text"></span></h2>
          <p className="muted"></p>

          <div className="contact-links">
            <a className="icon-link icon-link-text"><Mail size={18} /></a>
            <a className="icon-link icon-link-text"><Github size={18} /></a>
            <a className="icon-link icon-link-text"><Linkedin size={18} /></a>
          </div>

          <a className="btn btn-primary"></a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
