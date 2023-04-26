import React, { useEffect, useState } from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import { routeContact as routeContactPage } from "../../pages/ContactPage";
import { routeMain as routeMainPage } from "../../pages/MainPage";
import { routeCategory as routeCategoryPage } from "../../pages/CategoryPage";
import { routeCalendar as routeCalendarPage } from "../../pages/CalendarPage";
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
        <div className="logo-header">
          <div className="logo-circle" />
          <div className="logo-text">MOVIESinfo</div>
        </div>

        <nav className={`navbar-link body ${isActive ? "active" : ""}`}>
          <ul className="navbar-link">
          <NavLink
            className="navbar-link-button"
            to={routeMainPage()}
            activeClassName={"linkActive"}
            onClick={toggleActive}
          >
          All movies
          </NavLink>
          {/* <NavLink
              className="navbar-link-button"
              to={routeCategoryPage()}
              activeClassName={"linkActive"}
              onClick={toggleActive}
            >
              Фильмы по категориям
            </NavLink> */}

          <NavLink
            className="navbar-link-button"
            to={routeSearchPage()}
            activeClassName={"linkActive"}
            onClick={toggleActive}
          >
            Search
          </NavLink>
          <NavLink
            className="navbar-link-button"
            to={routeContactPage()}
            activeClassName={"linkActive"}
            onClick={toggleActive}
          >
            About
          </NavLink>
          <NavLink
            className="navbar-link-button"
            to={routeCalendarPage()}
            activeClassName={"linkActive"}
            onClick={toggleActive}
          >
            Calendar
          </NavLink>
          </ul>
      </nav>
        <div
          className={`header-burger body ${isActive ? "active" : ""}`}
          onClick={toggleActive}
        >
          <span></span>
        </div>
     </div>
    </header>
  );
};

export default Header;
