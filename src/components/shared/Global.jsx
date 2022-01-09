import React from "react";
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";

const menuToggler = () => {
  const menu = document.querySelector(".menuToggle");
  const navigation = document.querySelector(".navigation");
  menu.classList.toggle("active");
  navigation.classList.toggle("active");
};

const Global = () => {
  return (
    <>
      <Header menuToggler={menuToggler} />
      <Navigation menuToggler={menuToggler} />
    </>
  );
};

export default Global;
