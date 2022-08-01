import React from "react";
import "./Signin.scss";
import Form from "../../organisms/Form/Form";

const Signin = () => {
  const inputLabel = [
    {
      type: "email",
      placeholder: "Email",
      inputId: "field-1",
    },
    {
      type: "password",
      placeholder: "Password",
      inputId: "field-2",
    },
  ];

  return (
    <main className="login-container">
      <div className={"login-container__article"}>
        <h2 className="section__header">Login</h2>
        <p className="section__text">
          Get Access to your Orders, Wishlist and Recommendations
        </p>
      </div>
      <Form
        inputLabel={inputLabel}
        button={"Login"}
        className={"login-container__form"}
      />
    </main>
  );
};

export default Signin;
