import { date } from "../date";
import { ActivityName, IActivity } from "../enums";
import { ActivityImage } from "../images";

export const wineTasting: IActivity = {
  name: "Dégustation de vins",
  description:
    "Expérience sensorielle où les visiteurs goûtent une sélection de vins du domaine, découvrant ainsi les saveurs, arômes et caractéristiques propres à chaque cru.",
  img: <ActivityImage name={ActivityName.DEGUSTATION} />,
  date: date("16.12.2024"),
};
