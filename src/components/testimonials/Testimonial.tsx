"use client"
import Image from "next/image";
import "@/app/globals.css"
import styles from "@/styles/Section5.module.css"
import cards from "@/app/data/cards5.json"
import Card5 from "@/components/cards/TestimonialCard"
import data from "@/app/data/headers.json"
import { useScroll } from "@/hooks/useScroll";
export default function Testimonial() {
    const { scrollRef, scrollLeft, scrollRight } = useScroll();
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>
                    {data[4].header}
                </h2>

                <div className={styles.arrowcon}>
                    <button onClick={scrollLeft} className={styles.arrow}><Image
                        src="/images/arrl.png"
                        alt="icon"
                        height={24}
                        width={24}
                    /></button>
                    <button onClick={scrollRight} className={styles.arrow}><Image
                        src="/images/arrr.png"

                        alt="icon"
                        height={24}
                        width={24}
                    /></button>
                </div>
            </div>
            <div ref={scrollRef} className={styles.cards}>
                {cards.map((card, index) => (
                    <Card5
                        key={index}
                        para={card.para}
                        image={card.Image}
                        name={card.name}
                        job={card.job}
                    />
                ))}
            </div>
        </section>
    );
}