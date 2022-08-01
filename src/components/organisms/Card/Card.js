import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../../state/actions";
import useMediaQuery from "../../../utils/useMediaQuery";
import Button from "../../atoms/Button/Button";
import Image from "../../atoms/Image/Image";
import "./Card.scss";

const Card = ({ name, imageUrl, price, stock, text, id }) => {
  const browserWidth = useMediaQuery("(min-width: 769px)");

  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { addItem, editItem } = bindActionCreators(actions, dispatch);

  const addItemToCart = () => {
    if (!products[id]) {
      addItem({
        id,
        imageUrl,
        name,
        price,
        stock,
      });
    } else {
      editItem(id);
    }
  };

  return (
    <section className="card-container">
      <h2 className="card-container__title">{name}</h2>
      <figure className="card-container__image">
        <Image
          source={imageUrl}
          alt={`Image of ${name}`}
          className={"product-image"}
        />
      </figure>
      <p className="card-container__text" title={text}>
        {text}
      </p>
      <section className="card-container__section">
        {browserWidth ? (
          <>
            <p className="card-container__section__price">MRP Rs.{price}</p>
            <Button
              onClick={() => addItemToCart()}
              className={"card-container__section__buy-button"}
            >
              Buy Now
            </Button>
          </>
        ) : (
          <Button
            onClick={() => addItemToCart()}
            className={"card-container__section__buy-button"}
          >
            Buy Now @ Rs.{price}
          </Button>
        )}
      </section>
    </section>
  );
};

export default Card;
