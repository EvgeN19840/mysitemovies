import React, { useEffect, useState } from "react";
import moment from "moment";
import routeCalendar from "./routes";

import "./styles.scss";

interface CalendarCellProps extends React.HTMLAttributes<HTMLDivElement> {
  weekEndDay: boolean;
  dayNumber: moment.Moment;
  currentDay: boolean;
  currentMonth: boolean;
}

const CalendarCell: React.FC<CalendarCellProps> = ({
  weekEndDay,
  dayNumber = moment(),
  currentDay,
  currentMonth,
}) => {
  return (
    <div className={`calendar-wrap${currentMonth ? "-current" : ""}`}>
      <div className={`calendar${weekEndDay ? "-weekend" : ""}`}>
        <div className="wrap-cell">
          <div className={`date-in-cell${currentDay ? "-current" : ""}`}>
            {dayNumber.format("D")}
          </div>
        </div>
      </div>
    </div>
  );
};

const CalendarPage = () => {
  const [dayNumber, setDayNumber] = useState(moment());
  const [currentMonth, setCurrentMonth] = useState(moment());

  const totalDay = 42;
  const startDay = moment(dayNumber).startOf("month").startOf("week");
  const day = startDay.clone().subtract(1, "day");
  const totalDayCalendar = [...Array(totalDay)].map(() =>
    day.add(1, "day").clone()
  );

  const prevMonth = () => {
    setDayNumber((prev) => prev.clone().subtract(1, "month"));
    setCurrentMonth((prev) => prev.clone().subtract(1, "month"));
  };

  const nextMonth = () => {
    setDayNumber((next) => next.clone().add(1, "month"));
    setCurrentMonth((next) => next.clone().add(1, "month"));
  };

  const toDayHandler = () => {
    setDayNumber(moment());
    setCurrentMonth(moment());
  };
  console.log(dayNumber);
  console.log(moment().add(1, "month"));
  return (
    <div className="calendar-page">
      <div className="calendar-wrappper">
        <div className="month-handler-wrapp">
       
            <div className="handlers-and-current-month">
          <div className="button-handler-month">
              <button onClick={prevMonth}>&lt;</button>
              <button className="today-button" onClick={toDayHandler}>
                Today
              </button>
              <button onClick={nextMonth}>&gt;</button>
            </div>
            <div className="current-month-name">
            {dayNumber.format("MMMM")} {dayNumber.format("YYYY")}
            </div>
          </div>
          <div className="weekd-day">
            {[...Array(7)].map((_, index) => (
              <div key={index} className="day-of-week">
                {moment().day(index).format("ddd")}
              </div>
            ))}
          </div>
        </div>
        <div className="month-now">
          <div className="calendar-grid">
            {totalDayCalendar.map((dayNumber) => (
              <CalendarCell
                key={dayNumber.unix()}
                weekEndDay={dayNumber.day() === 6 || dayNumber.day() === 0}
                dayNumber={dayNumber}
                currentDay={dayNumber.isSame(moment(), "day")}
                currentMonth={dayNumber.isSame(currentMonth, "month")}
              ></CalendarCell>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export { routeCalendar };
export default CalendarPage;
