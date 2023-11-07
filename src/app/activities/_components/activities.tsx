import { ActivityImage, ActivityStyleImage } from "@/assets/activities";

export const Activities = () => (
  <section className="flex flex-col gap-20">
    <Activity title={"Explorer le Domaine"} date={{ day: 28, month: "NOV" }}>
      L&apos;exploration de notre domaine vous plongera dans l&apos;histoire
      viticole, offrant une expérience authentique dans nos vignes ensoleillées.
    </Activity>
    <Activity title={"Dégustation"} date={{ day: 2, month: "DEC" }}>
      Cette dégustation de vin rosé révèle des arômes de fraises et de
      framboises, une bouche fraîche avec des notes de pamplemousse et une
      finale propre et persistante, parfait pour les journées ensoleillées.
    </Activity>
    <Activity title={"Explorer le Domaine"} date={{ day: 24, month: "DEC" }}>
      Plongez dans l&apos;univers du vin avec des experts et découvrez les
      secrets de l&apos;œnologie dans une expérience éducative enrichissante.
    </Activity>
  </section>
);

interface Date {
  day: number;
  month: string;
}

interface ActivityProps extends React.PropsWithChildren {
  title: string;
  date: Date;
  image?: React.ReactNode;
}

const Activity = ({
  title,
  date,
  image,
  children: paragraph,
}: ActivityProps) => (
  <div className="flex flex-col gap-10 lg:flex-row max-w-[1146px] self-center lg:border-t-[1px] border-tertiary lg:pt-16">
    <DateFormat classname="for-desktop" {...date} />
    <div className="relative h-[200px] lg:h-[390px] lg:w-[390px]">
      <ActivityImage />
    </div>
    <div className="relative flex flex-col mt-10 mx-16 lg:m-0 gap-6 self-center max-w-[512px]">
      <DateFormat
        classname="for-mobile absolute right-2 top-0 translate-y-[-50%]"
        {...date}
      />
      <h4 className="text-tertiary text-2xl">{title}</h4>
      <p className="font-light">{paragraph}</p>

      <div className="self-end pt-4">
        <ActivityStyleImage />
      </div>
    </div>
  </div>
);

interface DateFormatProps extends Date {
  classname?: string;
}

const DateFormat = ({ day, month, classname }: DateFormatProps) => (
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
