import { useState } from "react";
import styles from "./Main.module.scss";
import ProductsSection from "../../components/organisms/ProuductsSection/ProductsSection";
import SortButton from "../../components/atoms/SortButton/SortButton";

const options = ["Prekės vaizdas", "Peržiūrėti modelį"];

const Main = () => {
  const [option, setOption] = useState<string>([...options][0]);

  console.log(option);

  const handleOptionChange = (option: string) => {
    setOption(option);
  };

  return (
    <div className={styles.main}>
      <SortButton handleOptionChange={handleOptionChange} options={options} />
      <ProductsSection option={option} />
    </div>
  );
};

export default Main;
