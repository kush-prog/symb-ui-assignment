import Image from "next/image";
import "../../styles/features.css";
import { JSX } from "react";

export default function Features(): JSX.Element {
  return (
    <section className="features-section">

      <div className="features-container">

        <div className="features-left">
          <h2>
            All the cool <span>features</span>
          </h2>

          <p>
            Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.
          </p>

          <a href="#">View all the features →</a>
        </div>

        <div className="features-right">
          <div className="visual">
            <Image
              src="/images/featureIcons.png"
              alt="background shape"
              width={250}
              height={550}
              className="feature-icons"
            />
            <Image
              src="/images/appblob.png"
              alt="background shape"
              width={500}
              height={500}
              className="feature-blob"
            />

            <div className="feature-card">
              <span className="tag">Popular</span>
              <h4>Design for how people think</h4>
              <p>Aliquam ut euismod condimentum elementum ultricies volutpat sit non.</p>
              <button type="button">Take Lesson</button>
            </div>

            <Image
              src="/images/feature1.png"
              alt="feature preview"
              width={200}
              height={200}
              className="img img-top"
            />

            <div className="image-bottom">
              <Image
                src="/images/feature3.png"
                alt="feature preview"
                width={300}
                height={200}
                className="img img-bottom-left"
              />
              <Image
                src="/images/feature4.png"
                alt="feature preview"
                width={232}
                height={180}
                className="img img-bottom-right"
              />
            </div>

            <Image
              src="/images/feature2.png"
              alt="user avatar"
              width={90}
              height={100}
              className="avatar"
            />
          </div>
        </div>

      </div>
    </section>
  );
}