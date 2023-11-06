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
  />
);

export const LegacyImage = () => (
  <Image
    src={`${homeFolder}/legacy.jpg`}
    alt={"A man far way on a desert road looking at the horizon"}
    fill={true}
  />
);

export const PlaceHolderImage = () => (
  <Image
    src={""}
    alt={"A placeholder image"}
    fill={true}
    placeholder="empty"
  />
);

export const HistoryStyle = ({ nb = 1 }) => (
  <Image
    src={`${homeFolder}/history-style${nb}.svg`}
    alt={"black line with another small line at 45 degrees at the bottom right"}
    width={131}
    height={24}
  />
);

export const BottleImage = ({ nb, alt }: { nb: number; alt: string }) => (
  <Image
    src={`${homeFolder}/bottle${nb}.png`}
    alt={`Bottle of ${alt}`}
    fill={true}
  />
);