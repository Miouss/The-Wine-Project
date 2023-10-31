import Image from "next/image";

const headerFolder = "/assets/header";

export const HeaderLogo = () => (
  <Image
    src={`${headerFolder}/logo.svg`}
    width={50}
    height={50}
    alt={"logo"}
  />
);


export const MenuLines = () => (
  <Image
    src={`${headerFolder}/lines.svg`}
    width={35}
    height={35}
    alt={"burger menu lines"}
  />
);