import Image from "next/image";

const winesFolder = "/assets/wines";

export const WinePrezImage = () => (
  <Image
    src={`${winesFolder}/prez.png`}
    alt={"A wine's cave with a lot of bottles"}
    fill={true}
    style={{ objectFit: "cover", filter: "brightness(50%)" }}
  />
);

export const WinePrezLogo = () => (
  <Image
    src={`${winesFolder}/logo.svg`}
    alt={"Logo with 3 'I' stylish"}
    width={128}
    height={128}
  />
);

const WineImage = ({ path }: { path: string }) => (
  <Image
    src={`${winesFolder}/${path}.png`}
    alt={"A woman drinking a glass of wine"}
    fill={true}
    style={{ objectFit: "cover" }}
  />
);

export const WineRoseImage = () => <WineImage path={"rose-wine"} />;

export const WineWhiteImage = () => <WineImage path={"white-wine"} />;

export const WineRedImage = () => <WineImage path={"red-wine"} />;
