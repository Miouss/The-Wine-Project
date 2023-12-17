import Image from "next/image";

export const EventImage = () => (
  <Image
    src={`/images/Carrousel/event.png`}
    fill={true}
    style={{ objectFit: "cover", filter: "brightness(0.5)" }}
    alt={"Couple dans un mariage"}
  />
);
