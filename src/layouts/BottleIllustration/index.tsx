import { DivGradient } from "@/components/DivGradient";
import { BottlesType } from "@/types";
import { Illustrations } from "./illustrations";

interface Props {
  bottleType: BottlesType;
}

export function BottleIllustration({ bottleType }: Props) {
  const { img, title } = Illustrations()[bottleType];

  return (
    <div
      className={`relative flex flex-col gap-16 h-[calc(100vh-70px)] lg:flex-row w-full max-w-[1184px]`}
    >
      <div className={`absolute lg:relative w-full lg:w-[600px] z-0 h-full`}>
        {img}
      </div>
      <DivGradient
        className={`relative flex-1 flex items-end lg:bg-none  lg:from-transparent  lg:via-transparent via-10%`}
      >
        <h3
          className={`font-cinzel font-normal relative lg:w-full text-3xl lg:text-6xl text-center pl-16 lg:p-0 mb-14 lg:mb-32 text-white lg:text-black lg:self-end`}
        >
          {title}
        </h3>
      </DivGradient>
    </div>
  );
}
