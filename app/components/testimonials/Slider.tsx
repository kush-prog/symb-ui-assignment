import TestimonialCard from "./TestimonialCards";
import testimonialsData from "@/app/data/testimonials.json";

export default function Slider() {
  const { cards } = testimonialsData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {cards.map((card, i) => (
        <TestimonialCard
          key={i}
          text={card.text}
          name={card.name}
          role={card.role}
          image={card.image}
        />
      ))}

    </div>
  );
}