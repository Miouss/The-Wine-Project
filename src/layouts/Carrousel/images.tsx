import { IMAGES_LAYOUTS_FOLDER } from "@/config";
import Image from "next/image";

export const EventImage = () => (
  <Image
    src={`${IMAGES_LAYOUTS_FOLDER}/Carrousel/event.png`}
    fill={true}
    style={{ objectFit: "cover", filter: "brightness(0.5)" }}
    alt={"Couple dans un mariage"}
  />
);
