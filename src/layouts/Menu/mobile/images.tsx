import { IMAGES_LAYOUTS_FOLDER } from "@/config";
import Image from "next/image";

export const Lines = () => (
  <Image
    src={`${IMAGES_LAYOUTS_FOLDER}/Menu/lines.svg`}
    width={35}
    height={35}
    alt={"burger menu lines"}
  />
);

export const StylishLogo = () => (
  <Image
    src={`${IMAGES_LAYOUTS_FOLDER}/Menu/stylish-logo.svg`}
    width={256}
    height={256}
    alt={"Logo 'clés' stylish"}
  />
);
