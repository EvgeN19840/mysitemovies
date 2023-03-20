import React from "react";
import "./styles.scss";
import { Switch } from "@mui/material";
import { NavLink } from "react-router-dom";
import { routeContact as routeContactPage } from "../../pages/ContactPage";
import { routeMain as routeMainPage } from "../../pages/MainPage";
import { routeCategory as routeCategoryPage } from "../../pages/CategoryPage";
import { routeSearch as routeSearchPage } from "../../pages/SearchPage";
import newlogo from "../../pictures/newlogo.png";



const Header = () => {
  return (
    <header>
      <div className="navbar">
        <div className="container">
        <div className="logo-header">
        <div className="logo-circle"/>
        <div className="logo-text">MOVIESinfo</div>
         </div>

          <div className="navbar-link">
            <nav>
              <NavLink className="navbar-link-button" to={routeMainPage()} activeClassName={"linkActive"}>
                Главная
              </NavLink>
              <NavLink className="navbar-link-button" to={routeCategoryPage()} activeClassName={"linkActive"}>
                Фильмы по категориям
              </NavLink>
              <NavLink className="navbar-link-button" to={routeContactPage()} activeClassName={"linkActive"}>
                О нас
              </NavLink>
              <NavLink className="navbar-link-button" to={routeSearchPage()} activeClassName={"linkActive"}>
                Поиск
              </NavLink>
            </nav>

          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
