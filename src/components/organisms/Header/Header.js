import React from "react";
import logo from "../../../../static/images/logo.png";
import "./Header.scss";
import { Link } from "react-router-dom";
import Cart from "../../molecules/Cart/Cart";

const Header = () => {
  return (
    <header className="header">
      <div className="header__sub-container">
        <Link to="/">
          <img src={logo} className="logo-image" alt="Logo Image" />
        </Link>
        <nav className="header__sub-container__nav-items">
          <Link to="/" className="header__sub-container__nav-items__link">
            Home
          </Link>
          <Link
            to="/products"
            className="header__sub-container__nav-items__link"
          >
            Products
          </Link>
        </nav>
        <div className="header__sub-container__nav-wrapper">
          <nav className="header__sub-container__nav-wrapper__login">
            <Link
              to="/signin"
              className="header__sub-container__nav-wrapper__login__link"
            >
              SignIn
            </Link>
            <Link
              to="/register"
              className="header__sub-container__nav-wrapper__login__link"
            >
              Register
            </Link>
          </nav>
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
