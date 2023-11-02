import { WinePrezImage, WinePrezLogo } from "@/assets/wines";
import { cinzel } from "@/fonts";
import { DivAbsoluteFullParent, HeaderSectionFullScreen } from "@/styled-components";

export function MainPrez() {
  return (
    <HeaderSectionFullScreen>
      <DivAbsoluteFullParent>
        <WinePrezImage />
      </DivAbsoluteFullParent>
      <div className="relative flex justify-center pt-32">
        <span className="absolute z-0">
          <WinePrezLogo />
        </span>

        <h1
          className={`${cinzel.className} font-bold relative text-5xl text-center mt-10 mb-14 text-white`}
        >
          LA CAVE
        </h1>
      </div>
    </HeaderSectionFullScreen>
  );
}
