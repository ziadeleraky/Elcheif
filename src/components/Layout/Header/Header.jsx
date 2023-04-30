import React from "react";
import classes from "./Header.module.css";
import mealsImg from "../../../assets/imgs/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Elcheif</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table full of meals" />
      </div>
    </>
  );
};

export default Header;
