import Content from "./Content";
import Background from "./Background";

export default function Cta() {
  return (
    <section className="relative bg-[#FACC15] min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden">

      <Background />

      <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
        <Content />
      </div>

    </section>
  );
}