import moment from "moment";
import { INews } from "types/INews";

import "./styles.scss";

interface CalendarCellProps extends React.HTMLAttributes<HTMLDivElement> {
  weekEndDay: boolean;
  dayNumber: moment.Moment;
  currentDay: boolean;
  currentMonth: boolean;
  premiered: boolean;
}

const CalendarCell = ({
  weekEndDay,
  dayNumber = moment(),
  currentDay,
  currentMonth,
  premiered,
}: CalendarCellProps) => {
  return (
    <div className={`calendar-wrap${currentMonth ? "-current" : ""}`}>
      <div className={`wrap${premiered ? "-movies" : ""}`}>
        <div className={`calendar${weekEndDay ? "-weekend" : ""}`}>
          <div className="wrap-cell">
            <div className={`date-in-cell${currentDay ? "-current" : ""}`}>
              {dayNumber.format("D")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CalendarCell;
