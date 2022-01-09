import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./Styles.css";

const Navigation = ({ menuToggler }) => {
  const refNav = useRef();
  const history = useHistory();

  const toHome = () => {
    history.push("/");
    menuToggler();
  };
  const toContact = () => {
    history.push("/contact");
    menuToggler();
  };
  const toAbout = () => {
    history.push("/about");
    menuToggler();
  };

  return (
    <ul ref={refNav} className={` navigation`}>
      <li onClick={toHome}>
        <a href="/#" onClick={(e) => e.preventDefault()}>
          Home
        </a>
      </li>
      <li onClick={toAbout}>
        <a href="/#" onClick={(e) => e.preventDefault()}>
          About
        </a>
      </li>
      <li>
        <a href="/#" onClick={(e) => e.preventDefault()}>
          Package
        </a>
      </li>
      <li onClick={toContact}>
        <a href="/#" onClick={(e) => e.preventDefault()}>
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
