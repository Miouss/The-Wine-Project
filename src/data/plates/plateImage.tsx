import Image from "next/image";
import { IMAGES_DATA_FOLDER } from "@/config";
import { PlateName } from "./enums";

export const PlateImage = ({ name }: { name: PlateName }) => (
  <Image
    src={`${IMAGES_DATA_FOLDER}/plates/${name}.jpg`}
    alt={"Plate"}
    fill={true}
    style={{ objectFit: "cover" }}
  />
);
