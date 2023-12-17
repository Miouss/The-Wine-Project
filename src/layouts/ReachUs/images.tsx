import Image from "next/image";

export const ReachUsImage = () => (
  <Image
    src={`/images/ReachUs/reach-us.jpg`}
    fill={true}
    style={{ objectFit: "cover", filter: "brightness(0.5)" }}
    alt={
      "femme en robe à pois noir et blanc debout sur un champ de fleurs violettes pendant la journée"
    }
  />
);

export const WhiteLineImage = () => (
  <Image
    src={`/images/styles/white-line-stylish.svg`}
    width={131}
    height={24}
    alt={"black line styled"}
  />
);