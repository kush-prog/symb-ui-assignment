import { JSX } from "react";
import Header from "./Header";
import Icons from "./Icons";
import Image from "next/image";
import "../../styles/tools.css";

export default function Tools(): JSX.Element {
  return (
    <section className="tools-section">
      <Image
        src="/images/bg1.png"
        alt="background shape"
        width={500}
        height={500}
        className="blob blob-left"
      />

      <Image
        src="/images/bg2.png"
        alt="background shape"
        width={350}
        height={350}
        className="blob blob-right"
      />
      <Header />
      <Icons />
    </section>
  );
}