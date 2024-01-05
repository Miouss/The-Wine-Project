import { date } from "../date";
import { ActivityName, IActivity } from "../enums";
import { ActivityImage } from "../images";

export const historyDiscovery: IActivity = {
  name: "Découverte de l'histoire du domaine",
  description:
    "Présentation de l'histoire fascinante du domaine viticole, incluant ses origines, son évolution, et les anecdotes liées à sa création et à ses traditions viticoles.",
  img: <ActivityImage name={ActivityName.BALADE_VIGNES} />,
  date: date("10.03.2023"),
};
