import Image from "next/image";
import { ReachUs } from "./../app/activities/_components/reach-us";

const aboutFolder = "/assets/activities";

export const PrezImage = () => (
  <Image
    src={`${aboutFolder}/prez.jpg`}
    fill={true}
    alt={"A woman serving wine in a glass"}
    style={{ objectFit: "cover", filter: "brightness(0.5)" }}
  />
);

export const ActivityImage = ({ nb = 0 }) => (
  <Image
    src={`${aboutFolder}/activity${nb}.png`}
    alt={"An activity"}
    fill={true}
    style={{ objectFit: "cover" }}
  />
);

export const ActivityStyleImage = ({ nb = 0 }) => (
  <Image
    src={`${aboutFolder}/activity-style${nb}.svg`}
    width={131}
    height={24}
    alt={"black line styled"}
  />
);

export const ReachUsImage = () => (
  <Image
    src={`${aboutFolder}/reach-us.jpg`}
    fill={true}
    style={{ objectFit: "cover", filter: "brightness(0.5)" }}
    alt={
      "femme en robe à pois noir et blanc debout sur un champ de fleurs violettes pendant la journée"
    }
  />
);
