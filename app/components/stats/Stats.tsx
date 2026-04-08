import StatItem from "./StatItem";

export default function Stats() {
  return (
    <section className="bg-[#0B1B33] py-12 md:py-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">

        <StatItem
          icon="/stats_img/heart-circle-sharp.svg"
          value="195"
          label="user countries"
        />

        <StatItem
          icon="/stats_img/diamond.svg"
          value="1M"
          label="valued teachers"
        />

        <StatItem
          icon="/stats_img/Icon.svg"
          value="17M"
          label="happy students"
        />

      </div>
    </section>
  );
}