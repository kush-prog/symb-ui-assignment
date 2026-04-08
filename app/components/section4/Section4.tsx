import ImageGrid from "./ImageGrid";
import Content from "./Content";

export default function Section4() {
  return (
    <section className="bg-[#EEF2F7] py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 grid md:grid-cols-2 gap-12 items-center">

        <ImageGrid />

        <Content />

      </div>
    </section>
  );
}