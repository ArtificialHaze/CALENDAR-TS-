import { Weekdays } from "./Weekdays";
import { Weekday, Date } from "./types";
import { Months } from "./Months";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { useState } from "react";

const Calendar = ({}) => {
  const [selectedDate, setSelectedDate] = useState<string | null>();

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedDate(e.currentTarget.getAttribute("value"));
  };

  const generateDates = (date: number) => {
    let selectedDateNumber: number = selectedDate ? parseInt(selectedDate) : 0;

    for (let i = 0; i < 7; i++) {
      return (
        <button
          onClick={handleChange}
          className={`date${date === 20 ? "today" : ""} ${
            date === selectedDateNumber ? "selected" : ""
          }`}
          value={date}
        >
          <p>{date}</p>
        </button>
      );
    }
  };

  const generateWeeks = (dates: Date[]) => {
    let daysInWeek = 7;
    let tempArray = [];

    for (let i = 0; i < dates.length; i += daysInWeek) {
      tempArray.push(dates.slice(i, i + daysInWeek));
    }

    return tempArray;
  };

  return (
    <div className="calendar-container">
      <div className="date-pick-container">
        <ChevronLeft />
        <span>Nov. 2022</span>
        <ChevronRight />
      </div>
      <div className="weekdays-container">
        {Weekdays.map((weekday) => {
          return (
            <div className="week-day" key={weekday}>
              {weekday}
            </div>
          );
        })}
      </div>
      <div className="calendar">
        {generateWeeks(Months).map((week, index) => (
          <div className="week" key={index}>
            {week.map((day) => generateDates(day.day))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
