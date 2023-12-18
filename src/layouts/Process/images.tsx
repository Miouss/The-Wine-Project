import { IMAGES_LAYOUTS_FOLDER } from "@/config";
import Image from "next/image";

export const ProcessImage = () => (
  <Image
    src={`${IMAGES_LAYOUTS_FOLDER}/Process/process.jpg`}
    alt={"bottle of wine"}
    fill={true}
    style={{ objectFit: "cover", filter: "brightness(0.5)" }}
  />
);