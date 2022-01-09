import React from "react";
import "./Styles.css";

const darkMode = () => {
  const body = document.querySelector("body");
  const dayNight = document.querySelector(".dayNight");
  body.classList.toggle("dark");
  dayNight.classList.toggle("active");
};

const Header = ({ menuToggler }) => {
  return (
    <header>
      <a href="www.google.com" className="logo">
        Logo
      </a>
      <div className="rightSide">
        <div onClick={darkMode} className="btns dayNight">
          <ion-icon name="moon-outline"></ion-icon>
          <ion-icon name="sunny-outline"></ion-icon>
        </div>
        <div onClick={menuToggler} className="btns menuToggle">
          <ion-icon name="menu-outline"></ion-icon>
          <ion-icon name="close-outline"></ion-icon>
        </div>
      </div>
    </header>
  );
};

export default Header;
