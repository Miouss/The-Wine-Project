import Image from "next/image";

export const TchinDesktopImage = () => (
  <Image
    src={`/images/Informations/tchin-desktop.png`}
    alt={"two glasses of wine, holding by two differents hands, tchining"}
    fill={true}
    style={{ objectFit: "cover" }}
  />
);

export const ProcessImage = () => (
  <Image
    src={`/images/Process/process.jpg`}
    alt={"bottle of wine"}
    fill={true}
    style={{ objectFit: "cover", filter: "brightness(0.5)" }}
  />
);
