import Image from "next/image";
import styles from "@/app/styles/testimonials.module.css";

interface Props {
  text: string;
  name: string;
  role: string;
  image: string;
}

export default function TestimonialCard({
  text,
  name,
  role,
  image,
}: Props) {
  return (
    <div className={styles.card}>

      <p className={styles.cardText}>
        {text}
      </p>

      <div className={styles.cardAuthor}>
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className={styles.authorAvatar}
        />

        <div>
          <p className={styles.authorName}>{name}</p>
          <p className={styles.authorRole}>{role}</p>
        </div>
      </div>
    </div>
  );
}