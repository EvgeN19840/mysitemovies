import React from "react";
import logo2 from "../../pictures/logo2.png";
import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-heder">
        <div className="logo-circle"/>
        <div className="logo-text">MOVIESinfo</div>
         </div>
        <div className="workproject">Дипломный проект</div>
        <div className="about-made">
        <div className="made-by">Made by </div>
        <div className="madename">Набережный Евгений</div>
        </div>

    </footer>
  );
};

export default Footer;
