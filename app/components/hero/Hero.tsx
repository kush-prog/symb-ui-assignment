
import Container from "@/app/components/ui/Container";
import HeroLeft from "./Hero-left";
import HeroRight from "./Hero-Right";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-8 lg:px-10 xl:px-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
}