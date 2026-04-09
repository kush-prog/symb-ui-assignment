import Header from "./Header";
import Slider from "./Slider";

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 space-y-10">

        <Header />
        <Slider />

      </div>
    </section>
  );
}