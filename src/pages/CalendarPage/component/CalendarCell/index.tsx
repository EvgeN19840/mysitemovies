import moment from "moment";

import "./styles.scss";

interface CalendarCellProps extends React.HTMLAttributes<HTMLDivElement> {
  weekEndDay: boolean;
  dayNumber: moment.Moment;
  currentDay: boolean;
  currentMonth: boolean;
  premiered: boolean;
  name: string;
}

const CalendarCell = ({
  weekEndDay,
  dayNumber = moment(),
  currentDay,
  currentMonth,
  premiered,
  name,
}: CalendarCellProps) => {
  const handleClick = () => {
    if (premiered) {
      console.log("Click");
    }
  };

  return (
    <div className="main-wrap">
        <div className={`calendar${weekEndDay ? "-weekend" : ""}`}>
    <div
      className={`calendar-wrap${currentMonth ? "-current" : ""}`}
      onClick={handleClick}
    >
  
          <div className="wrap-cell">
          <div className={`wrap${premiered ? "-movies" : ""}`}>
        {premiered && name && <div className="name-movies-cell">{name}</div>}
      
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
