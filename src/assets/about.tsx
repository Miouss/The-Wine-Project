import Image from "next/image";

const aboutFolder = "/assets/about";

export const PrezImage = () => (
  <Image
    src={`${aboutFolder}/prez.jpg`}
    fill={true}
    alt={"A book open on a table lighted by a candel, it's pretty dark"}
    style={{ objectFit: "cover", filter: "brightness(0.5)" }}
  />
);

export const ManImage = () => (
  <Image
    src={`${aboutFolder}/the-man.png`}
    fill={true}
    alt={"A man from behind, looking left, grayscale"}
    style={{ objectFit: "cover", filter: "brightness(0.5)" }}
  />
);

export const LegacyImage = () => (
  <Image
    src={`${aboutFolder}/the-legacy.png`}
    fill={true}
    alt={"1 bottle of wine at the foreground, 1 glass of wine at the background, in a dark room, grayscale"}
    style={{ objectFit: "cover", filter: "brightness(0.5)" }}
  />
);

export const ProcessImage = () => (
  <Image
    src={`${aboutFolder}/the-process.png`}
    fill={true}
    alt={"A glass of wine, with the wine in form of waves, in a dark room, grayscale except the red color of the wine"}
    style={{ objectFit: "cover", filter: "brightness(0.5)" }}
  />
);

export const DomainImage = () => (
  <Image
    src={`${aboutFolder}/the-domain.jpg`}
    fill={true}
    alt={"An agricultural fields, mountains at sight, slightly cloudy sky"}
    style={{ objectFit: "cover", filter: "brightness(0.5)" }}
  />
);

export const FamilyImage = ({ nb = 0 }) => (
  <Image
    src={`${aboutFolder}/family${nb}.jpg`}
    fill={true}
    alt={"Family member of De Vir"}
    style={{ objectFit: "cover" }}
  />
);