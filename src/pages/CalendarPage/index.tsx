import React, { MouseEvent, useEffect, useState } from "react";
import moment from "moment";
import routeCalendar from "./routes";
import CalendarCell from "./component/CalendarCell";
import { loadMoviesMainPage } from "store/mainpage/actions";
import { useDispatch, useSelector } from "react-redux";
import { TypedDispatch } from "store";
import { getFilms } from "store/mainpage/selector";
import { INews } from "types/INews";
import PrevInfoMovis from "./component/CalendarCell/PrevInfoMovis";
interface INewsItemParams {
  item: INews;
}

const CalendarPage = ({ item }: INewsItemParams) => {
  const dispatch: TypedDispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMoviesMainPage());
  }, []);
  const newsList = useSelector(getFilms);
  const [dayNumber, setDayNumber] = useState(moment());
  const [currentMonth, setCurrentMonth] = useState(moment());

const [idPrevMovis, setIdPrevMovis] = useState<number | null>(null)
const [showPrev, setShowPrev]= useState<boolean>(false)

useEffect(()=>{
  if(!idPrevMovis && showPrev){
    setIdPrevMovis(null)
  }

}, [idPrevMovis, setIdPrevMovis, showPrev])


  const startDay = moment(dayNumber).startOf("month").startOf("week");
  const day = startDay.clone().subtract(1, "day");
  const totalDayCalendar = [...Array(42)].map(() =>
    // 42 cell
    day.add(1, "day").clone()
  );

  const prevMonth = () => {
    setDayNumber(() => dayNumber.clone().subtract(1, "month"));
    setCurrentMonth(() => dayNumber.clone().subtract(1, "month"));
  };

  const nextMonth = () => {
    setDayNumber(() => dayNumber.clone().add(1, "month"));
    setCurrentMonth(() => dayNumber.clone().add(1, "month"));
  };

  const toDayHandler = () => {
    setDayNumber(moment());
    setCurrentMonth(moment());
  };

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
                premiered={
                  newsList.some(
                    (item) =>
                      new Date(item.premiered.slice(5)).getTime() ===
                        new Date(dayNumber.format("MM-DD")).getTime() &&
                      item.name &&
                      item.id
                  ) && true
                }
                name={
                  newsList.find(
                    (item) =>
                      new Date(item.premiered.slice(5)).getTime() ===
                      new Date(dayNumber.format("MM-DD")).getTime()
                  )?.name || ""
                }
                id={
                  newsList.find(
                    (item) =>
                      new Date(item.premiered.slice(5)).getTime() ===
                      new Date(dayNumber.format("MM-DD")).getTime()
                  )?.id
                }
                idPrevMovis={idPrevMovis}
                setIdPrevMovis={setIdPrevMovis}
                setShowPrev={setShowPrev}
              ></CalendarCell>
            ))}
          </div>
        </div>
      </div>
      {idPrevMovis &&showPrev && <PrevInfoMovis setShowPrev={setShowPrev}  idPrevMovis={idPrevMovis}/>}
    </div>
  );
};
export { routeCalendar };
export default CalendarPage;
