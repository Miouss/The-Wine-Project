import { BottlesType } from "@/types";
import { PinkBottle } from "./pink";
import { RedBottle } from "./red";
import { WhiteBottle } from "./white";

export const BOTTLES = {
  [BottlesType.PINK]: PinkBottle,
  [BottlesType.RED]: RedBottle,
  [BottlesType.WHITE]: WhiteBottle,
};
