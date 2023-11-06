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
  <div className="flex flex-col gap-10">
    <div className="relative h-[200px]">
      <ActivityImage />
    </div>
    <div className="relative flex flex-col pt-10 px-16">
      <div className="absolute right-2 top-0 flex flex-col items-center gap-2 translate-y-[-50%]">
        <span className={`font-cinzel font-bold`}>{date.month}</span>
        <span className={`w-4 h-[2px] bg-tertiary`} />
        <span className="font-light">{date.day}</span>
      </div>
      <h4>{title}</h4>
      <p>{paragraph}</p>
    </div>
    <div className="self-end px-16">
      <ActivityStyleImage />
    </div>
  </div>
);
