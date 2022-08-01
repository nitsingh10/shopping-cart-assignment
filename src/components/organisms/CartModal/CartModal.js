import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../../state/actions";
import Button from "../../atoms/Button/Button";
import CardTablet from "../CartTablet/CardTablet";
import "./CartModal.scss";

const CartModal = ({ cartOpen }) => {
  const { count, products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { handleCart } = bindActionCreators(actions, dispatch);
  const countItems = count === 1 ? `${count} item` : `${count} items`;

  return (
    <section className="cartmodal__section">
      <div className="cartmodal__section__heading">
        <h1 className="cartmodal__section__heading__title">
          My Cart ({countItems})
        </h1>
        <Button
          className={"cartmodal__section__heading__button"}
          onClick={() => handleCart(cartOpen)}
        >
          &#10005;
        </Button>
      </div>
      <CardTablet
        className={"cartmodal__section__flex"}
        count={count}
        products={products}
      />
    </section>
  );
};

export default CartModal;
