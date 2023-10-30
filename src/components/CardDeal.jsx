import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Seductive Aroma<br className="sm:block hidden" /> Rich Flavor
        <br className="sm:block hidden" />  and Endless Delight
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Coffee, a true delight for the senses, awakens the soul with its seductive aroma and indulgent flavor. Like a warm hug in a cup, it wraps you in comfort and invigorates your spirit. With each sip, the world around you seems to slow down, allowing you to savor the moment. Whether it's a velvety latte, a bold espresso, or a simple brewed cup, coffee offers a delightful escape, a pause in the chaos of the day, and a perfect excuse to gather with friends or simply enjoy your own company. In a world filled with choices, finding the perfect coffee is like discovering a hidden treasure, and each cup is a new adventure waiting to be savored.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[70%]" />
    </div>
  </section>
);

export default CardDeal;