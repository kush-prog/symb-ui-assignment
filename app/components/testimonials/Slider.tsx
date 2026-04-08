import TestimonialCard from "./TestimonialCards";

export default function Slider() {
  return (
    <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">

      <TestimonialCard
        text="Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non..."
        name="Hellen Jummy"
        role="Financial Counselor"
        image="/testimonials_img/User_Thumb_1.svg"
      />

      <TestimonialCard
        text="Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id..."
        name="Ralph Edwards"
        role="Math Teacher"
        image="/testimonials_img/User_Thumb_2.svg"
      />

      <TestimonialCard
        text="Sagittis nunc egestas leo et malesuada urna risus..."
        name="Hellena John"
        role="Psychology Student"
        image="/testimonials_img/User_Thumb_3.svg"
      />

    </div>
  );
}