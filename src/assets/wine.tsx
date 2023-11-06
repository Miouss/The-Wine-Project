import Image from "next/image";

const wineFolder = "/assets/wine";

export const BottleImage = () => (
  <Image
    src={`${wineFolder}/bottle.png`}
    alt={"bottle of wine"}
    fill={true}
  />
);

export const ProcessImage = () => (
  <Image
    src={`${wineFolder}/process.jpg`}
    alt={"bottle of wine"}
    fill={true}
    style={{ objectFit: "cover", filter: "brightness(0.5)" }}
  />
);

export const TchinDesktopImage = () => (
  <Image
    src={`${wineFolder}/tchin-desktop.png`}
    alt={"two glasses of wine, holding by two differents hands, tchining"}
    fill={true}
    style={{ objectFit: "cover" }}
  />
);

export const DistinctionImage = ({ nb = 0 }) => (
  <Image
    src={`${wineFolder}/distinction${nb}.svg`}
    alt={"Distinction medal for win"}
    fill={true}
  />
);

export const PlateImage = ({ nb = 0 }) => (
  <Image
    src={`${wineFolder}/plate${nb}.jpg`}
    alt={"Plate"}
    fill={true}
    style={{ objectFit: "cover" }}
  />
);

export const TchinImage = () => (
  <Image
    src={`${wineFolder}/tchin.png`}
    alt={"Portrait of a woman looking at a glass of wine, saturated in red"}
    fill={true}
    style={{ objectFit: "cover", filter: "brightness(0.8)" }}
  />
);
