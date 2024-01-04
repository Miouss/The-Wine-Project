import { BottlesType } from "@/types";
import { BOTTLES } from "@/data/bottles";

interface Props {
  bottleType: BottlesType;
}

export function BigBottlePrez({ bottleType }: Props) {
  const { img, price, capacity, percentAlcohol, name, description } =
    BOTTLES[bottleType];

  return (
    <>
      <div className="relative w-[186px] lg:w-[313.8px] h-[559px] lg:h-[800px]">
        {img}
        <h4
          className={`flex flex-col text-tertiary absolute right-0 bottom-0 translate-x-10 lg:translate-x-20 -translate-y-3 lg:-translate-y-6 text-xl lg:text-3xl`}
        >
          <span>{percentAlcohol}%</span>
          <span>{capacity} L</span>
        </h4>
      </div>
      <h2 className={`font-cinzel text-5xl lg:text-6xl text-center`}>
        {name.toLocaleUpperCase()}
      </h2>
      <h3 className="flex flex-col gap-6 lg:gap-16 px-16 lg:text-2xl">
        <span>{description}</span>
        <span
          className={`text-tertiary font-cinzel text-5xl font-bold text-center px-16`}
        >
          {price}€
        </span>
      </h3>
    </>
  );
}
