import React from "react";

import { CalendarProvider } from "../../context/calendarContext";
import CalendarDates from "./calendarDates";
import CHeaeder from "./header";
import WeekDays from "./weekDays";

function Calendar() {
  return (
    <CalendarProvider>
      <CHeaeder />
      <WeekDays />
      <CalendarDates />
    </CalendarProvider>
  );
}

export { Calendar };
