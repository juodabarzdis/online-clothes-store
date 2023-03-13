import styles from "./Main.module.scss";
import ProductsSection from "../../components/organisms/ProuductsSection/ProductsSection";

const Main = () => {
  return (
    <div className={styles.main}>
      <ProductsSection />
    </div>
  );
};

export default Main;
