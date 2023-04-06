import React, { useEffect, useState } from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import { routeContact as routeContactPage } from "../../pages/ContactPage";
import { routeMain as routeMainPage } from "../../pages/MainPage";
import { routeCategory as routeCategoryPage } from "../../pages/CategoryPage";
import { routeSearch as routeSearchPage } from "../../pages/SearchPage";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    document.body.classList.toggle("lock", isActive);
  }, [isActive]);
  return (
    <header className="header">
      <div className="navbar">
        <div className="container">
          <div className="logo-header">
            <div className="logo-circle" />
            <div className="logo-text">MOVIESinfo</div>
          </div>

          <div className={`navbar-link body ${isActive ? "active" : ""}`}>
            <NavLink
              className="navbar-link-button"
              to={routeMainPage()}
              activeClassName={"linkActive"}
              onClick={toggleActive}
            >
              Главная
            </NavLink>
            <NavLink
              className="navbar-link-button"
              to={routeCategoryPage()}
              activeClassName={"linkActive"}
              onClick={toggleActive}
            >
              Фильмы по категориям
            </NavLink>
            <NavLink
              className="navbar-link-button"
              to={routeSearchPage()}
              activeClassName={"linkActive"}
              onClick={toggleActive}
            >
              Поиск
            </NavLink>
            <NavLink
              className="navbar-link-button"
              to={routeContactPage()}
              activeClassName={"linkActive"}
              onClick={toggleActive}
            >
              О нас
            </NavLink>
          </div>
          <div
            className={`header-burger body ${isActive ? "active" : ""}`}
            onClick={toggleActive}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
