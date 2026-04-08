import Content from "./Content";
import Visual from "./Visual";

export default function Features() {
  return (
    <section className="relative bg-[#EEF2F7] py-24 md:py-5 overflow-hidden">

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        <Content />
        <Visual />

      </div>
    </section>
  );
}