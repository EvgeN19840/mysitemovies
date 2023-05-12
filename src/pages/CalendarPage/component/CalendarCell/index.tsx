import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import moment, { Moment } from "moment";
import "./styles.scss";
import { routeDeteil } from "pages/DeteilPage";

interface CalendarCellProps {
  weekEndDay: boolean;
  dayNumber: Moment;
  currentDay: boolean;
  currentMonth: boolean;
  premiered: boolean;
  name: string;
  id?: string;
}

const CalendarCell = ({
  weekEndDay,
  dayNumber,
  currentDay,
  currentMonth,
  premiered,
  name,
  id,
}: CalendarCellProps) => {
  const [selectedDay, setSelectedDay] = useState<Moment | undefined>(undefined);
  useEffect(() => {
    setSelectedDay(dayNumber);
  }, []);

  return (
    <div className="main-wrap">
      <div className={`calendar${weekEndDay ? "-weekend" : ""}`}>
        <div className={`calendar-wrap${currentMonth ? "-current" : ""}`}>
          <div className="wrap-cell">
            <div className={`wrap${premiered ? "-movies" : ""}`}>
              {premiered && name && (
                <NavLink className="wrap-setitem" to={routeDeteil(`${id}`)}>
                  <div className="name-movies-cell">{name}</div>
                </NavLink>
              )}
              <div className={`date-in-cell${currentDay ? "-current" : ""}`}>
                {dayNumber.format("D")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CalendarCell;
