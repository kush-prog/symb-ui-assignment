import HeroLeft from "./Hero-left";
import HeroRight from "./Hero-right";
import { JSX } from "react";
import "../../styles/hero.css";

export default function Hero(): JSX.Element {
  return (
    <section className="hero-section">
      <div className="hero-container d-flex align-items-center gap-5">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
}