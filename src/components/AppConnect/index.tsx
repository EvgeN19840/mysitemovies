import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DeteilPage, {
  routeDeteil as routeDeteilPage,
} from "../../pages/DeteilPage";
import ContactPage, {
  routeContact as routeContactPage,
} from "../../pages/ContactPage";
import MainPage, { routeMain as routeMainPage } from "../../pages/MainPage";
import CategoryPage, { routeCategory as routeCategoryPage,} from "../../pages/CategoryPage";
import CalendarPage, { routeCalendar as routeCalendarPage,} from "../../pages/CalendarPage";
import CalenderMoviesPage, { routeCalenderMovies as routeCalenderMoviesPage,} from "../../pages/CalenderMoviesPage";
import SearchPage, {
  routeSearch as routeSearchPage,
} from "../../pages/SearchPage";
import "./styles.scss";

import Footer from "../Footer";
import Header from "../Header";

const AppConnect = () => {
  return (
    <div className="content">
      <Header />
      <Switch>
        <Route exact path={routeDeteilPage()} component={DeteilPage} />
        <Route exact path={routeMainPage()} component={MainPage} />
        <Route exact path={routeCategoryPage()} component={CategoryPage} />
        <Route exact path={routeCalendarPage()} component={CalendarPage} />
        <Route exact path={routeSearchPage()} component={SearchPage} />
        <Route exact path={routeContactPage()} component={ContactPage} />
               <Route exact path={routeCalenderMoviesPage()} component={CalenderMoviesPage} />
        <Redirect
          to={{
            pathname: routeMainPage(),
          }}
        />
      </Switch>
      <Footer />
    </div>
  );
};
export default AppConnect;
