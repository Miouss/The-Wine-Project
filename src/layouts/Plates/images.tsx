import { IMAGES_LAYOUTS_FOLDER } from "@/config";
import Image from "next/image";

export const PlateImage = ({ nb = 0 }) => (
  <Image
    src={`${IMAGES_LAYOUTS_FOLDER}/Plates/plate${nb}.jpg`}
    alt={"Plate"}
    fill={true}
    style={{ objectFit: "cover" }}
  />
);
