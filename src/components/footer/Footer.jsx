import React from "react";

import "./Styles.css";
const Footer = () => {
  return (
    <footer>
      <p className="copyrightText">&copy; Jeandeson Nascimento - 2021</p>
      <ul className="sci">
        <li>
          <a href="www.google.com">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li>
          <a href="www.google.com">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li>
          <a href="www.google.com">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
