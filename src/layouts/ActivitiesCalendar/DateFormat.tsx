import { Date } from "@/data/activities/date";

interface DateFormatProps {
  day: Date["day"];
  month: Date["month"];
  classname?: string;
}

export const DateFormat = ({ day, month, classname }: DateFormatProps) => (
  <div className={`flex flex-col items-center gap-2 lg:text-3xl ${classname}`}>
    <span id="date-month" className={`font-cinzel font-bold`}>
      {month}
    </span>
    <span className={`w-4 lg:w-8 h-[1px] bg-tertiary`} />
    <span id="date-day" className="font-light">
      {day}
    </span>
  </div>
);
