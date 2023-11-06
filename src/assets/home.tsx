import Image from "next/image";

const homeFolder = "/assets/home";

export const PrezImage = () => (
  <Image
    src={`${homeFolder}/prez.png`}
    alt={"3 bottles of wines"}
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
    src={`${homeFolder}/history-desktop.png`}
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

export const BottleImage = ({
  nb = 0,
  title,
}: {
  nb: number;
  title: string;
}) => (
  <Image
    src={`${homeFolder}/bottle${nb}.png`}
    alt={`Bottle of wine '${title}'`}
    fill={true}
  />
);

export const BottleHomeImage = () => (
  <Image
    src={`${homeFolder}/bottle.png`}
    alt={`Bottle of wine 'les clés'`}
    fill={true}
  />
);
