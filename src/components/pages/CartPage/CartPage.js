import React from "react";
import { useSelector } from "react-redux";
import "./CartPage.scss";

import CardTablet from "../../organisms/CartTablet/CardTablet";

const CartPage = () => {
  const { count, products } = useSelector((state) => state.cart);

  const countItems = count === 1 ? `${count} item` : `${count} items`;
  return (
    <main className="cartpage">
      <h1 className="cartpage__title">My Cart ({countItems})</h1>
      <CardTablet count={count} products={products} />
    </main>
  );
};

export default CartPage;
