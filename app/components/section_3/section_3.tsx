import Content from "./Content";
import PreviewCard from "./PreviewCard";
import CourseCards from "./CourseCards";
import Background from "./Background";

export default function Section3() {
  return (
    <section className="relative bg-[#EEF2F7] py-14 md:py-18 overflow-hidden">
      
      <Background />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        <Content />

        <div className="relative">
          <PreviewCard />
          <CourseCards />
        </div>

      </div>
    </section>
  );
}