import { BottlesType } from "@/types";
import { PinkBottle } from "./list/pink";
import { RedBottle } from "./list/red";
import { WhiteBottle } from "./list/white";

export const BOTTLES = {
  [BottlesType.PINK]: PinkBottle,
  [BottlesType.RED]: RedBottle,
  [BottlesType.WHITE]: WhiteBottle,
};
