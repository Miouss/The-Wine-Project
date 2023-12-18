import { IMAGES_LAYOUTS_FOLDER } from "@/config";
import Image from "next/image";

export const FamilyImage = ({ nb = 0 }) => (
  <Image
    src={`${IMAGES_LAYOUTS_FOLDER}/Family/${nb}.jpg`}
    fill={true}
    alt={"Family member of De Vir"}
    style={{ objectFit: "cover" }}
  />
);
