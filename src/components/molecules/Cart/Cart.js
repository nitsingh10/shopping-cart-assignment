import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../../state/actions/index";
import CartImage from "../../../../static/images/cart.svg";
import useMediaQuery from "../../../utils/useMediaQuery";
import Image from "../../atoms/Image/Image";
import Modal from "../../atoms/Modal/Modal";
import CartModal from "../../organisms/CartModal/CartModal";
import "./Cart.scss";

const Cart = () => {
  const { count, cartOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { handleCart } = bindActionCreators(actions, dispatch);

  const countItem = count === 1 ? `${count} item` : `${count} items`;

  const history = useHistory();
  const browserWidth = useMediaQuery("(min-width: 769px)");

  const handleBrowserWidth = () => {
    browserWidth ? handleCart(cartOpen) : history.push("/cartpage");
  };

  const handleOnKeyPress = (e) => {
    e.key === "Enter" && handleBrowserWidth();
  };

  return (
    <>
      <div
        className="cart-wrapper"
        onClick={() => {
          handleBrowserWidth();
        }}
        tabIndex={0}
        onKeyPress={handleOnKeyPress}
      >
        <Image
          source={CartImage}
          className={"cart-wrapper__image"}
          alt={"Cart Image"}
        />
        <p className="cart-wrapper__text">{countItem}</p>
      </div>
      {cartOpen ? (
        <Modal>
          <CartModal cartOpen={cartOpen} />{" "}
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

export default Cart;
