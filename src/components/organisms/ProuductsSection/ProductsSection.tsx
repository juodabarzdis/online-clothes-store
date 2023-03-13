import styles from "./ProductsSection.module.scss";

import ProductCard from "../../molecules/ProductCard/ProductCard";

const product = [
  {
    image: [
      "https://cdn.aboutstatic.com/file/images/2d185fbe32e59bf0352c4ebb06e91a8a.png?bg=F4F4F5&quality=75&trim=1&height=1280&width=960",
      "https://cdn.aboutstatic.com/file/images/ea252e31339993f91093ea411d0cffaa.jpg?quality=75&height=1280&width=960",
    ],
    title: "KENDALL FOR ABOUT YOU",
    curr_price: 80,
    prev_price: [110, 139],
    colors: ["cherry", "black", "white"],
  },
  {
    image: [
      "https://cdn.aboutstatic.com/file/images/13484433757e0fc6d3d1c836c00fb79b.png?bg=F4F4F5&quality=75&trim=1&height=1280&width=960",
      "https://cdn.aboutstatic.com/file/images/96959bad4c9f573d4454e3d0508e5925.jpg?quality=75&height=1280&width=960",
    ],
    title: "ABOUT YOU",
    curr_price: 239,
    prev_price: [299, 399.99],
    colors: ["cream"],
  },
  {
    image: [
      "https://cdn.aboutstatic.com/file/images/bcd633bed0c2ed824591587af8a623a7.png?bg=F4F4F5&quality=75&trim=1&height=1280&width=960",
      "https://cdn.aboutstatic.com/file/images/82f1fdf4188f03381ad4d1b7cdd203d4.jpg?quality=75&height=1280&width=960",
    ],
    title: "PATRIZIA PEPE",
    curr_price: 120,
    prev_price: [199, 299.99],
    colors: ["black"],
  },
  {
    image: [
      "https://cdn.aboutstatic.com/file/images/7ac0804e47472fa8c2b2d93f16bf5ffa.jpg?quality=75&height=1280&width=960",
      "https://cdn.aboutstatic.com/file/images/261971516fe1ea35b42666dab61f7cf3.jpg?quality=75&height=1280&width=960",
    ],
    title: "ABOUT YOU X VIAM STUDIO",
    curr_price: 29.9,
    prev_price: [47.7],
    colors: ["cream", "black"],
  },
];

const ProductsSection = () => {
  return (
    <section className={styles["products-section"]}>
      {product.map((product) => (
        <ProductCard
          image={product.image}
          title={product.title}
          price={product.curr_price}
          prevPrice={product.prev_price}
          colors={product.colors}
        />
      ))}
    </section>
  );
};

export default ProductsSection;
