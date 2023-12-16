import { BottlesType } from "@/types";
import { PinkBottle } from "./pink";
import { RedBottle } from "./red";
import { WhiteBottle } from "./white";

export interface Bottle {
  name: string;
  img: JSX.Element;
  description: string;
  alt: string;
  price: number;
  percentAlcohol: number;
  capacity: number;
}

export function Bottles() {
  return {
    [BottlesType.PINK]: () => PinkBottle(),
    [BottlesType.RED]: () => RedBottle(),
    [BottlesType.WHITE]: () => WhiteBottle(),
  };
}