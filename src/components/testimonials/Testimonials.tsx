"use client";
import { JSX, useRef } from "react";
import Image from "next/image";
import "../../styles/testimonials.css";

export default function Testimonials(): JSX.Element {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "next" | "prev"): void => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.querySelector(".testimonial-card") as HTMLElement | null;

    if (!card) return;

    const cardWidth = card.offsetWidth + 24;

    container.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <h2>What everyone says</h2>

        <div className="arrows">
          <button onClick={() => scroll("prev")}>←</button>
          <button onClick={() => scroll("next")}>→</button>
        </div>
      </div>

      <div className="testimonial-cards" ref={scrollRef}>

        <div className="testimonial-card">
          <p>Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.</p>
          <div className="user">
            <Image src="/images/user1.png" alt="Hellen Jummy" width={64} height={64} />
            <div>
              <h4>Hellen Jummy</h4>
              <span>Financial Counselor</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p>Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.</p>
          <div className="user">
            <Image src="/images/user2.png" alt="Ralph Edwards" width={64} height={64} />
            <div>
              <h4>Ralph Edwards</h4>
              <span>Math Teacher</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p>Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.</p>
          <div className="user">
            <Image src="/images/user3.png" alt="Hellena John" width={64} height={64} />
            <div>
              <h4>Hellena John</h4>
              <span>Psychology Student</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p>Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.</p>
          <div className="user">
            <Image src="/images/user1.png" alt="John Doe" width={64} height={64} />
            <div>
              <h4>John Doe</h4>
              <span>Student</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p>Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.</p>
          <div className="user">
            <Image src="/images/user2.png" alt="John Doe" width={64} height={64} />
            <div>
              <h4>John Doe</h4>
              <span>Student</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}