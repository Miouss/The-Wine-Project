import { IMAGES_STYLES_FOLDER } from "@/config";
import Image from "next/image";

export const BlackLineImage = () => (
  <Image
    src={`${IMAGES_STYLES_FOLDER}/black-line-stylish.svg`}
    width={131}
    height={24}
    alt={"black line stylish"}
  />
);
