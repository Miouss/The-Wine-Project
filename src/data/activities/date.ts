export enum Month {
  JAN = "January",
  FEB = "February",
  MAR = "March",
  APR = "April",
  MAY = "May",
  JUN = "June",
  JUL = "July",
  AUG = "August",
  SEP = "September",
  OCT = "October",
  NOV = "November",
  DEC = "December",
  ERR = "ERROR",
}

export type Day =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31;

export interface Date {
  day: Day;
  month: Month;
  year: number;
}

export function date(fullDate: string) {
  const [day, month, year] = fullDate.split(".");

  return {
    day: parseInt(day) as Day,
    month: toStringMonth(parseInt(month)).substring(0, 3) as Month,
    year: parseInt(year),
  };
}

function toStringMonth(month: number): Month {
  if (month < 1 || month > 12) throw new Error("Invalid month");

  switch (month) {
    case 1:
      return Month.JAN;
    case 2:
      return Month.FEB;
    case 3:
      return Month.MAR;
    case 4:
      return Month.APR;
    case 5:
      return Month.MAY;
    case 6:
      return Month.JUN;
    case 7:
      return Month.JUL;
    case 8:
      return Month.AUG;
    case 9:
      return Month.SEP;
    case 10:
      return Month.OCT;
    case 11:
      return Month.NOV;
    case 12:
      return Month.DEC;
    default:
      return Month.ERR;
  }
}
