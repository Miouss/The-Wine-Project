import { date } from "../date";
import { ActivityName, IActivity } from "../enums";
import { ActivityImage } from "../images";

export const walkInTheVineyard: IActivity = {
  name: "Balade à travers les vignes",
  description:
    "Exploration des vignobles, offrant aux visiteurs une immersion au cœur des vignes, permettant d'apprécier le paysage, les différents cépages et le terroir.",
  img: <ActivityImage name={ActivityName.BALADE_VIGNES} />,
  date: date("14.02.2023"),
};
