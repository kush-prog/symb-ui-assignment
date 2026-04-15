import "../../styles/hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function HeroLeft() {
    return (
        <div className="hero-left d-flex flex-column ">
            <div className="hero-left1 d-flex flex-column justify-content-center">
                <h1><span className="highlight">Teach</span> students worldwide</h1>

                <p>
                    Amet nunc diam orci duis ut sit diam arcu, nec. <br />
                    Eleifend proin massa tincidunt viverra lectus pulvinar.<br />
                    Nunc ipsum est pellentesque turpis ultricies.
                </p>

                <div className="hero-left2 d-flex ">
                    <button type="button">Sign Up Now</button>

                    <span>
                        <FontAwesomeIcon
                            icon={faPlay}
                            className="me-2"
                            style={{ width: "16px", height: "16px" }}
                        />
                        {" "}View Demo
                    </span>
                </div>
            </div>

            <div className="hero-left3 d-flex ">
                <span className="trusted-text">
                  Trusted by leading companies
                </span>

                <div className="trusted-logos d-flex align-items-center">
                  <Image src="/images/logo1.png" alt="company logo" width={30} height={32} />
                  <Image src="/images/logo2.png" alt="company logo" width={30} height={32} />
                  <Image src="/images/logo3.png" alt="company logo" width={30} height={32} />
                  <Image src="/images/logo4.png" alt="company logo" width={30} height={32} />
                  <Image src="/images/logo5.png" alt="company logo" width={30} height={32} />
                </div>
            </div>
        </div>
    );
}