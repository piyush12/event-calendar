import {
  startOfMonth,
  startOfWeek,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  eachWeekOfInterval,
} from "date-fns";

export const WEEKS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const weekInterval = (date) => {
  const firstWeekStart = startOfWeek(startOfMonth(date));
  const lastWeekEnd = endOfWeek(endOfMonth(date));
  const weeksDates = eachWeekOfInterval({
    start: firstWeekStart,
    end: lastWeekEnd,
  });

  const dates = weeksDates.map((date, i) => {
    if (weeksDates[i + 1]) {
      const dateInterval = eachDayOfInterval({
        start: date,
        end: weeksDates[i + 1],
      });
      return dateInterval.slice(0, 7);
    }

    return eachDayOfInterval({
      start: weeksDates[i],
      end: lastWeekEnd,
    });
  });

  return dates;
};
