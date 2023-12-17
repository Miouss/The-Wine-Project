import Image from "next/image";

export const ProcessImage = () => (
  <Image
    src={`/images/Process/process.jpg`}
    alt={"bottle of wine"}
    fill={true}
    style={{ objectFit: "cover", filter: "brightness(0.5)" }}
  />
);