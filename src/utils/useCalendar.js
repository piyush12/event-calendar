import { useContext } from "react";
import { CalendarContext } from "../context/calendarContext";

const useCalendar = () => {
  const context = useContext(CalendarContext);

  if (!context) {
    throw new Error("Must be wrap inside calendar context");
  }
  return context;
};

export default useCalendar;
