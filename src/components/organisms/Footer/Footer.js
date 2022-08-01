import React from "react";
import { useLocation } from "react-router";
import "./Footer.scss";

const Footer = () => {
  const location = useLocation();
  if (location.pathname.includes("cartpage")) {
    return null;
  }
  return (
    <footer className="footer">
      <p className="footer__text">
        Copyright © 2011-2018 Sabka Bazaar Gorcery Supplies Pvt. Ltd.
      </p>
    </footer>
  );
};

export default Footer;
