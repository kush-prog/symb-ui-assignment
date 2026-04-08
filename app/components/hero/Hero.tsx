
import Container from "@/app/components/ui/Container";
import HeroLeft from "./Hero-left";
import HeroRight from "./Hero-Right";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center px-4 sm:px-8 lg:px-10 xl:px-14 py-2 md:py-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-center">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
}