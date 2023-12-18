import { IMAGES_LAYOUTS_FOLDER, IMAGES_STYLES_FOLDER } from "@/config";
import Image from "next/image";

export const LegacyImage = () => (
  <Image
    src={`${IMAGES_LAYOUTS_FOLDER}/ActivitiesPrez/legacy.jpg`}
    alt={"A man far way on a desert road looking at the horizon"}
    fill={true}
    style={{ objectFit: "cover", objectPosition: "bottom" }}
  />
);

export const WhiteLineImage = () => (
  <Image
    src={`${IMAGES_STYLES_FOLDER}/white-line-stylish.svg`}
    alt={"black line with another small line at 45 degrees at the bottom right"}
    width={131}
    height={24}
  />
);