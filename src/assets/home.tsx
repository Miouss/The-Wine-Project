import Image from "next/image";

const homeFolder = "/assets/home";

export const PrezImageDesktop = () => (
  <Image
    src={`/assets/prez/home-bottle.png`}
    alt={`Bottle of wine 'les clés'`}
    fill={true}
  />
);


export const PrezImageMobile = () => (
  <Image
    src={`/assets/prez/home-bottles.png`}
    alt={`Bottle of wine 'les clés'`}
    fill={true}
  />
);

export const HistoryImage = () => (
  <Image
    src={`${homeFolder}/history.png`}
    alt={"A man far way on a desert road looking at the horizon"}
    fill={true}
    style={{ objectFit: "cover" }}
  />
);

export const HistoryDesktopImage = () => (
  <Image
    src={`/assets/prez/home-desktop.png`}
    alt={"A man far way on a desert road looking at the horizon"}
    fill={true}
    style={{ objectFit: "cover" }}
  />
);

export const LegacyImage = () => (
  <Image
    src={`${homeFolder}/legacy.jpg`}
    alt={"A man far way on a desert road looking at the horizon"}
    fill={true}
    style={{ objectFit: "cover", objectPosition: "bottom" }}
  />
);

export const PlaceHolderImage = () => (
  <Image src={""} alt={"A placeholder image"} fill={true} placeholder="empty" />
);

export const HistoryStyle = ({ nb = 1 }) => (
  <Image
    src={`${homeFolder}/history-style${nb}.svg`}
    alt={"black line with another small line at 45 degrees at the bottom right"}
    width={131}
    height={24}
  />
);