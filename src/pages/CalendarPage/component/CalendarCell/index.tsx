import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import moment, { Moment } from "moment";
import "./styles.scss";
import { routeDeteil } from "pages/DeteilPage";
import PrevInfoMovis from "./PrevInfoMovis";

interface CalendarCellProps {
  weekEndDay: boolean;
  dayNumber: Moment;
  currentDay: boolean;
  currentMonth: boolean;
  premiered: boolean;
  name: string;
  id?: string;
  idPrevMovis: number | null;
  setShowPrev: (value: boolean) => void;
  setIdPrevMovis: (value: number) => void;
}

const CalendarCell = ({
  weekEndDay,
  dayNumber,
  currentDay,
  currentMonth,
  premiered,
  name,
  id,
  idPrevMovis,
  setIdPrevMovis,
  setShowPrev,
}: CalendarCellProps) => {
  const handleMouseEnter = useCallback(() => {
    setShowPrev(true);
    setIdPrevMovis(Number(id));
  }, [setShowPrev, setIdPrevMovis, id]);
const handleMouseLeave = useCallback(() => {
  setShowPrev(false);
  setIdPrevMovis(Number(id));
}, [setShowPrev, setIdPrevMovis, id]);
  return (
    <div className={`main-wrap${premiered ? "-movies" : ""}`}>
      <div className={`calendar${weekEndDay ? "-weekend" : ""}`}>
        <div className={`calendar-wrap${currentMonth ? "-current" : ""}`}>
          <div className="wrap-cell">
            {premiered && name && (
              <div onMouseEnter={handleMouseEnter} className="name-movies-cell">
                <div onMouseLeave={handleMouseLeave}>
                <NavLink className="wrap-setitem" to={routeDeteil(id)}>
                  <div className="name-movies-cell">{name}</div>
                </NavLink>
              </div>
              </div>
            )}

            <div className={`date-in-cell${currentDay ? "-current" : ""}`}>
              {dayNumber?.format("DD")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarCell;
