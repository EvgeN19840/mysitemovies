import moment from "moment";
import { NavLink } from "react-router-dom";
import { routeDeteil } from "pages/DeteilPage";
import "./styles.scss";

interface CalendarCellProps extends React.HTMLAttributes<HTMLDivElement> {
  weekEndDay: boolean;
  dayNumber: moment.Moment;
  currentDay: boolean;
  currentMonth: boolean;
  premiered: boolean;
  name: string;
  id?: string;
}

const CalendarCell = ({
  weekEndDay,
  dayNumber = moment(),
  currentDay,
  currentMonth,
  premiered,
  name,
  id,
}: CalendarCellProps) => {
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
