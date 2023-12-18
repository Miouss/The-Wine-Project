import { IMAGES_LAYOUTS_FOLDER, IMAGES_STYLES_FOLDER } from "@/config";
import Image from "next/image";

export const ActivityImage = ({ nb = 0 }) => (
  <Image
    src={`${IMAGES_LAYOUTS_FOLDER}/Activities/activity${nb}.png`}
    alt={"An activity"}
    fill={true}
    style={{ objectFit: "cover" }}
  />
);

export const BlackLineImage = () => (
  <Image
    src={`${IMAGES_STYLES_FOLDER}/black-line-stylish.svg`}
    width={131}
    height={24}
    alt={"black line stylish"}
  />
);
