import { createContext, useState } from "react";

const CalendarContext = createContext();

const CalendarProvider = (props) => {
  const [month, setMonth] = useState(new Date());

  return <CalendarContext.Provider value={[month, setMonth]} {...props} />;
};

export { CalendarProvider, CalendarContext };
