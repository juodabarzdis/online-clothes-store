import { useState } from "react";
import ProductCard from "./components/molecules/ProductCard/ProductCard";

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
];

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
        }}
      >
        {product.map((product) => (
          <ProductCard
            image={product.image}
            title={product.title}
            price={product.curr_price}
            prevPrice={product.prev_price}
            colors={product.colors}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
