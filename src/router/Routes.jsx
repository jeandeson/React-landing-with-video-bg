import React from "react";
import { Switch, Route } from "react-router-dom";
import Global from "../components/shared/Global";
import Video from "../components/video/Video";
import Contact from "../components/contact/Contact";
import About from "../components/about/About";

const Routes = () => {
  return (
    <>
      <Global />
      <Switch>
        <Route path="/" exact component={Video} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
      </Switch>
    </>
  );
};

export default Routes;
