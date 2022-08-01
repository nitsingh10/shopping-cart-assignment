import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../../state/actions";
import "./Counter.scss";
import Button from "../../atoms/Button/Button";

const Counter = ({ quantity, price, id, stock }) => {
  const dispatch = useDispatch();
  const { removeItem, editItem } = bindActionCreators(actions, dispatch);

  return (
    <div className="counter">
      <Button onClick={() => removeItem(id)} className={"counter__button"}>
        -
      </Button>
      <p className="counter__text">{quantity}</p>
      <Button
        onClick={() => editItem(id)}
        className={"counter__button"}
        disabled={stock === quantity}
      >
        +
      </Button>
      <p className="counter__multiply">&#10005;</p>
      <p className="counter__text">{price}</p>
    </div>
  );
};

export default Counter;
