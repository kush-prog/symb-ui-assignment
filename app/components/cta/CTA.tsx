import Content from "./Content";
import Background from "./Background";

export default function Cta() {
  return (
    <section className="relative bg-[#FACC15] min-h-[550px] md:min-h-[650px] lg:min-h-[750px] flex items-center overflow-hidden">

      <Background />

      <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
        <Content />
      </div>

    </section>
  );
}