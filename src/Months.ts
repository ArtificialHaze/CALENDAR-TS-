import { Date } from "./types";

const generateDates = (): Date[] => {
  let dates: Date[] = [];
  for (let i = 0; i < 31; i++) {
    let date: Date = { day: i };
    dates.push(date);
  }
  return dates;
};

export const Months: Date[] = generateDates();
