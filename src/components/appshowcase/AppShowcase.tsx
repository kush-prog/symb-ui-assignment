import Image from "next/image";
import { JSX } from "react";
import "../../styles/appshowcase.css";

export default function AppShowcase(): JSX.Element {
  return (
    <section className="app-section">
      <Image
        src="/images/appIcons.png"
        alt="background shape"
        width={140}
        height={580}
        className="app-icons"
      />
      <Image
        src="/images/appblob.png"
        alt="background shape"
        width={480}
        height={450}
        className="app-blob"
      />

      <div className="app-left">
        <h2>
          An <span className="highlight">all-in-one</span> app that makes it easier
        </h2>

        <ul>
          <li>Est et in pharetra magna adipiscing ornare aliquam.</li>
          <li>Tellus arcu sed consequat ac velit ut eu blandit.</li>
          <li>Ullamcorper ornare in et egestas dolor orci.</li>
        </ul>

        <a href="#">Find more about the app →</a>
      </div>

      <div className="app-right">
        <div className="image-wrapper">

          <Image
            src="/images/bgimg1.png"
            alt="App interface preview"
            width={650}
            height={400}
            className="main-img"
            style={{ width: "100%", height: "auto" }}
          />

          <div className="cards-container">

            <div className="card">
              <span className="tag featured">Featured</span>
              <h3>The map of mathematics</h3>
              <p>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
              <button type="button">Take Lesson</button>
            </div>

            <div className="card">
              <span className="tag popular">Popular</span>
              <h3>Design for how people think</h3>
              <p>Aliquam ut euismod condimentum elementum ultricies volutpat sit non.</p>
              <button type="button">Take Lesson</button>
            </div>

            <div className="card">
              <span className="tag new">New</span>
              <h3>International & commercial law</h3>
              <p>Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.</p>
              <button type="button">Take Lesson</button>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}