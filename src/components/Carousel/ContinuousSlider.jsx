import Marquee from "react-fast-marquee";
import ProductCard from "../Card/ProductCard";
import { productData } from "../../dummyData";

const ContinuousSlider = () => {
  return (
    <Marquee
      gradient
      gradientWidth={50}
      pauseOnHover
      className="rounded-md overflow-hidden "
    >
      <div className="flex gap-x-4 ">
        {productData?.map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
      </div>
    </Marquee>
  );
};

export default ContinuousSlider;
