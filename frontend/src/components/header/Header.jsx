import React from "react";
import About from "../../pages/about/about";
import Client from "../../pages/client/Client";
import Contact from "../../pages/contact/Contact";
import Resources from "../../pages/resources/resources";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <h2>Header</h2>
      <About />
      <Client />
      <Contact />
      <Resources />
    </div>
  );
};
export default Header;
