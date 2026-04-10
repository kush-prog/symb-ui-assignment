import TestimonialCard from "./TestimonialCards";
import testimonialsData from "@/app/data/testimonials.json";
import styles from "@/app/styles/testimonials.module.css";

export default function Slider() {
  const { cards } = testimonialsData;

  return (
    <div className={styles.cardsGrid}>
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