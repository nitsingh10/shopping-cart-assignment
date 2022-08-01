import React, { useEffect, useRef } from "react";
import ReactDom from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../../state/actions/index";
import useFocusTrap from "../../../utils/useFocusTrap";
import "./Modal.scss";

const Modal = ({ children }) => {
  const { cartOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { handleCart } = bindActionCreators(actions, dispatch);

  const ref = useRef(null);
  const setElementRef = useFocusTrap(null);

  useEffect(() => {
    if (cartOpen) {
      setElementRef(ref);
      document.body.style.overflow = "hidden";
    }

    return () => {
      setElementRef(null);
      document.body.style.overflow = "unset";
    };
  }, [cartOpen]);

  return ReactDom.createPortal(
    <div className="modal" ref={ref}>
      <div className="modal__overlay" onClick={() => handleCart(cartOpen)} />
      <div>{children}</div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
