import Image from "next/image";
import "../../styles/cta.css";
import { JSX } from "react";

export default function CTA(): JSX.Element {
  return (
    <section className="cta-section">

      <picture className="cta-bg left">
        <source media="(max-width: 768px)" srcSet="/images/users-mobile-top.png" />
        <Image 
          src="/images/users1.png" 
          alt="users illustration top"
          width={760}
          height={600}
          style={{ width: "100%", height: "auto" }}
        />
      </picture>

      <div className="d-flex flex-column cta-content">
        <h2>Join a world of learning</h2>

        <p>
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.<br />
          Risus elit et fringilla habitant ut facilisi.
        </p>

        <button type="button">Sign Up Now</button>
      </div>

      <picture className="cta-bg right">
        <source media="(max-width: 768px)" srcSet="/images/users-mobile-bottom.png" />
        <Image 
          src="/images/users2.png" 
          alt="users illustration bottom"
          width={600}
          height={600}
          style={{ width: "100%", height: "auto" }}
        />
      </picture>

    </section>
  );
}