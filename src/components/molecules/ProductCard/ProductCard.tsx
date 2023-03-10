import { useState } from "react";
import classNames from "classnames";
import styles from "./ProductCard.module.scss";
import Button from "../../atoms/Button/Button";

type ProductCardProps = {
  image: string[];
  title: string;
  price: number;
  prevPrice?: number[];
  colors: string[];
};

const ProductCard = ({
  image,
  title,
  price,
  prevPrice,
  colors,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const convertPrice = (price: number) => {
    return price.toFixed(2).replace(".", ",");
  };

  console.log("isHovered", isHovered);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles["product-image"]}>
        <img
          className={styles["product-image__main"]}
          src={image[0]}
          alt="product"
        />
        <img
          className={classNames(
            styles["product-image__hover"],
            isHovered && styles["product-image__hover--hovered"]
          )}
          src={image[1]}
          alt="product"
        />
      </div>
      <div className={styles["product-info"]}>
        <p className={styles["product-info__title"]}>{title}</p>
        <div className={styles["product-price"]}>
          <div className={styles["product-price__current"]}>
            <span>{convertPrice(price)} &euro;</span>
          </div>

          <div className={styles["product-price__previous"]}>
            {prevPrice &&
              prevPrice.map((price, index) => (
                <span
                  className={styles["product-price__previous--strike"]}
                  key={index}
                >
                  {convertPrice(price)} &euro;
                </span>
              ))}
          </div>
          <div className={styles["product-color"]}>
            {colors &&
              colors.map((color, index) => (
                <div
                  className={styles["product-color__dot"]}
                  style={{ backgroundColor: `var(--${color})` }}
                  key={index}
                />
              ))}
          </div>
        </div>
        <div className={styles["price-change"]}>
          <span className={styles["price-change__text"]}>
            30 dienų geriausia kaina**: 14,90 € (+141%)
          </span>
        </div>
        <div
          className={classNames(
            styles["product-button"],
            isHovered && styles["product-button--hovered"]
          )}
        >
          <Button />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
