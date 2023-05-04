import moment, { Moment } from "moment";
import React from "react";
import "./styles.scss";
import routeCalenderMovies from "./routes";
import CalendarCell from "pages/CalendarPage/component/CalendarCell";

interface CalendarMoviesProps {
  weekEndDay?: boolean;
  dayNumber: Moment;
  currentDay?: boolean;
  currentMonth?: boolean;
  premiered?: boolean;
  name?: string;
  id?: string;
  selectedDay?: Moment;
}

const CalendarMoviesPage = ({
  dayNumber,
  name,
  selectedDay,
}: CalendarMoviesProps) => {
  console.log(selectedDay);
  return (
    <div className="main-calendar-movis-wrap">
      <div className="selected-day">
        <CalendarCell
          weekEndDay={false}
          dayNumber={dayNumber}
          currentDay={false}
          currentMonth={false}
          premiered={false}
          name=""
        />
        {selectedDay && <h1>Selected day: {selectedDay.format("MMM DD")}</h1>}
        {name && <h3>Selected movie: {name}</h3>}
      </div>
    </div>
  );
};

export { routeCalenderMovies };
export default CalendarMoviesPage;
