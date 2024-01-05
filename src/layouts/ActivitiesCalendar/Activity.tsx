import { IActivity } from "@/data/activities/enums";
import { DateFormat } from "./DateFormat";
import { BlackLineImage } from "./images";

interface Props {
  activity: IActivity;
}

export const Activity = ({ activity }: Props) => {
  const {
    date: { day, month },
    name,
    img,
    description,
  } = activity;

  return (
    <div className="flex flex-col gap-10 lg:flex-row max-w-[1146px] self-center lg:border-t-[1px] border-tertiary lg:pt-16">
      <DateFormat classname="for-desktop" day={day} month={month} />
      <div className="relative h-[200px] lg:h-[390px] lg:w-[390px]">{img}</div>
      <div className="relative flex flex-col mt-10 mx-16 lg:m-0 gap-6 self-center max-w-[512px]">
        <DateFormat
          classname="for-mobile absolute right-2 top-0 translate-y-[-50%]"
          day={day}
          month={month}
        />
        <h4 className="text-tertiary text-2xl">{name}</h4>
        <p className="font-light">{description}</p>

        <div className="self-end pt-4">
          <BlackLineImage />
        </div>
      </div>
    </div>
  );
};
