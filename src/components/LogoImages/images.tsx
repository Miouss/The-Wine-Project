import { IMAGES_COMPONENTS_FOLDER } from "@/config";
import Image from "next/image";

export enum LogoSizes {
  BIG = 256,
  SMALL = 128,
}

interface Props {
  size: LogoSizes;
}

export const LogoImage = ({ size }: Props) => (
  <Image
    src={`${IMAGES_COMPONENTS_FOLDER}/Logo/logo.svg`}
    width={size}
    height={size}
    alt={"Logo 'clés' stylish"}
  />
);


export const BlackLogoImage = () => (
  <Image
    src={`${IMAGES_COMPONENTS_FOLDER}/Logo/black-logo.svg`}
    width={50}
    height={50}
    alt={"Logo 'clés' stylish"}
  />
);
