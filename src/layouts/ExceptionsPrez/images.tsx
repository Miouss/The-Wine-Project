import { IMAGES_STYLES_FOLDER } from "@/config";
import Image from "next/image";

export const BlackLineImage = () => (
  <Image
    src={`${IMAGES_STYLES_FOLDER}/black-line-stylish.svg`}
    alt={"black line with another small line at 45 degrees at the bottom right"}
    width={131}
    height={24}
  />
);
