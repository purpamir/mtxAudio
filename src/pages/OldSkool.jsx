import React from "react";
import Oldskool1_1 from "../assets/images/old-skool/black/oldskool1.webp";
import Oldskool1_2 from "../assets/images/old-skool/black/oldskool2.webp";
import Oldskool1_3 from "../assets/images/old-skool/black/oldskool3.webp";
// import Oldskool1_4 from "../assets/images/old-skool/black/oldskool4.webp";
// import Oldskool1_5 from "../assets/images/old-skool/black/oldskool5.webp";
import Product from "../components/Product";
import "../App.css";
import chess from "../assets/images/old-skool/chess.jpg";
import blackwhite from "../assets/images/old-skool/black/unnamed.png";
const OldSkoolProducts = [
  {
    id: 1,
    name: "Old Skool 36 'Black White'",
    price: 81.99,
    image: blackwhite,
    // Oldskool1_2,
    // image: Oldskool1_2,
  },
  {
    id: 2,
    name: "Vans Old Skool Decon Checkerboard",

    price: 49.99,
    image: chess,
  },
  {
    id: 3,
    name: "Product 3",
    price: 19.99,
    image: Oldskool1_3,
  },
];

const OldSkool = () => {
  return (
    <>
      <div className="grid scroll-m-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {OldSkoolProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default OldSkool;
