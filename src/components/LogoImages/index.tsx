import { BlackLogoImage, LogoImage, LogoSizes } from "./images";

export function LogoImages() {
  return {
    big: <LogoImage size={LogoSizes.BIG} />,
    small: <LogoImage size={LogoSizes.SMALL} />,
    black: <BlackLogoImage />,
  };
}
