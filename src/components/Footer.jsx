import { Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p></p>
        <div className="social-icons">
          <a className="icon-link"><Github size={18} /></a>
          <a className="icon-link"><Linkedin size={18} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
