import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../../state/actions";
import "./EmptyCart.scss";
import { useHistory } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import useMediaQuery from "../../../utils/useMediaQuery";

const EmptyCart = () => {
  const browserWidth = useMediaQuery("(min-width: 769px)");
  const history = useHistory();

  const { cartOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { handleCart } = bindActionCreators(actions, dispatch);

  const goToProducts = () => {
    if (browserWidth) {
      handleCart(cartOpen);
      history.push("/products");
    } else {
      history.push("/products");
    }
  };

  return (
    <section className="empty-cart">
      <div className="empty-cart__sub-container">
        <h2 className="empty-cart__sub-container__title">
          No items in your cart
        </h2>
        <p className="empty-cart__sub-container__text">
          Your favourite items are just a click away
        </p>
      </div>
      <footer className="empty-cart__footer">
        <Button
          className={"empty-cart__footer__start-button"}
          onClick={() => goToProducts()}
        >
          Start Shopping
        </Button>
      </footer>
    </section>
  );
};

export default EmptyCart;
