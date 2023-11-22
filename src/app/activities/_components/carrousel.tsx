"use client";

import { EventImage } from "@/assets/activities";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "./carrousel/chevron";

export const Carrousel = () => {
  const [currActivity, setCurrActivity] = useState(0);

  const handleClick = (swipeSide: "left" | "right") => {
    let nextActivity;

    if (swipeSide === "left") {
      nextActivity = currActivity === 0 ? 2 : currActivity - 1;
    } else {
      nextActivity = currActivity === 2 ? 0 : currActivity + 1;
    }

    setCurrActivity(nextActivity);
  };

  const translateX = (currActivity * 100) / 3;

  setTimeout(() => {
    const nextActivity = currActivity === 2 ? 0 : currActivity + 1;
    setCurrActivity(nextActivity);
  }, 5000);

  return (
    <section className="relative overflow-x-hidden h-screen w-screen self-center">
      <ChevronLeft handleClick={handleClick} />
      <ChevronRight handleClick={handleClick} />
      <div className="absolute h-screen w-screen">
        <EventImage />
      </div>
      <div className="h-screen w-full pb-6 pt-20 flex flex-col gap-12 justify-between items-center">
        <div className="relative flex flex-col gap-2">
          <h3 className="text-3xl text-white font-cinzel">ÉVÈNEMENTS PASSÉS</h3>
          <span className="self-center w-[200px] h-[1px] bg-white" />
        </div>
        <ul
          className={`relative w-[300%] flex-1 self-start items-end flex z-1 transition-all duration-500`}
          style={{ transform: `translateX(-${translateX}%)` }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <CarrouselItem key={i} />
          ))}
        </ul>
        <ul
          className="relative w-full flex justify-between gap-2 px-[149px]"
          style={{
            maxWidth: "clamp(92px,100%,700px)",
          }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <CircleItem key={i} activityNb={i} currActivity={currActivity} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const CarrouselItem = () => (
  <li className={`text-white flex flex-col px-16 gap-4`}>
    <h4 className={`font-cinzel text-3xl`}>MARIAGE</h4>
    <p className="font-light">
      Au cœur de notre domaine, un mariage féérique a illuminé nos vignes. Les
      époux se sont unis parmi la beauté naturelle du terroir provençal, créant
      des souvenirs inoubliables au sein de notre domaine.
    </p>
  </li>
);

interface CircleItemProps {
  activityNb: number;
  currActivity: number;
}

const CircleItem = ({ activityNb, currActivity }: CircleItemProps) => (
  <li
    className={`rounded-full flex-shrink-0 h-3 w-3 border-white border-[1px] ${
      activityNb === currActivity ? "bg-white" : "bg-black"
    }`}
  />
);
