import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faEuroSign, faPerson } from "@fortawesome/free-solid-svg-icons";
import { JSX } from "react";
import "../../styles/footer.css";

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">

      <div className="footer-container">
        <div className="logo-col d-flex gap-1">
          <Image 
            src="/images/logo.png" 
            alt="Teach logo"
            width={32}
            height={32}
          />
          <span>teach</span>
        </div>

        <div className="footer-col">
          <h4>Product</h4>
          <a href="#">Pricing</a>
          <a href="#">Overview</a>
          <a href="#">Browse</a>
          <a href="#">Accessibility <span className="badge">BETA</span></a>
        </div>

        <div className="footer-col">
          <h4>Solutions</h4>
          <a href="#">Brainstorming</a>
          <a href="#">Ideation</a>
          <a href="#">Wireframing</a>
          <a href="#">Research</a>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <a href="#">Help Center</a>
          <a href="#">Blog</a>
          <a href="#">Tutorials</a>
          <a href="#">FAQs</a>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <a href="#">Contact Us</a>
          <a href="#">Developers</a>
          <a href="#">Documentation</a>
          <a href="#">Integrations</a>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Press</a>
          <a href="#">Events</a>
          <a href="#" className="demo-link">Request Demo →</a>
        </div>

      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>uteach @ {new Date().getFullYear()}. All rights reserved.</p>

        <div className="footer-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
          <a href="#">
            <FontAwesomeIcon icon={faGlobe} style={{ width: "18px" }} /> EN
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faEuroSign} style={{ width: "15px" }} /> EUR
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faPerson} style={{ width: "15px" }} />
          </a>
        </div>
      </div>

    </footer>
  );
}