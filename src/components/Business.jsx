import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Indulge in the Brew, <br className="sm:block hidden" /> We'll Craft the Flavor.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Sipping on the perfect cup of coffee is an experience that transcends the ordinary, and we're here to make it extraordinary. With the right beans, the ideal roast, and the perfect brew method, you can embark on a journey of taste, aroma, and warmth that elevates your day. But in a world brimming with coffee choices, it can be a challenge to find your perfect blend. Fear not; we're here to guide you. Whether you seek the bold richness of a dark roast, the mellow embrace of a light roast, or the exotic allure of single-origin beans, we've got the expertise to help you explore and discover. So, while you savor the moment with your coffee, we'll be your trusted companions on this flavorful quest, crafting the perfect brew that suits your unique preferences.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;