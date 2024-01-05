import { Date } from "./date";

export enum ActivityName {
  DEGUSTATION = "wine-tasting",
  BALADE_VIGNES = "walk-in-the-vineyard",
  DECOUVERTE_HISTOIRE = "history-discovery",
}

export interface IActivity {
  name: string;
  description: string;
  img: JSX.Element;
  date: Date;
}
