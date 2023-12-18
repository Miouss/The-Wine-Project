import { IMAGES_LAYOUTS_FOLDER } from "@/config";
import Image from "next/image";

export const DistinctionImage = ({ nb = 0 }) => (
  <Image
    src={`${IMAGES_LAYOUTS_FOLDER}/Distinctions/distinction${nb}.svg`}
    alt={"Distinction medal for win"}
    fill={true}
  />
);
