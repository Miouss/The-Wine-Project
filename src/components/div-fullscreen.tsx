import { WinePrezLogo } from "@/assets/wines";

import { DivAbsoluteFullParent } from "@/styled-components";
import React from "react";

interface Props {
  bgImage: React.ReactNode;
  title: string;
}

export const DivFullscreenWithLogo = ({ bgImage, title }: Props) => (
  <div className="relative flex flex-col gap-16 h-[calc(100vh-68.1167px)] lg:h-[calc(100vh-105px)]">
    <DivAbsoluteFullParent>{bgImage}</DivAbsoluteFullParent>
    <div className="relative flex justify-center pt-32 lg:pt-44">
      <span className="absolute z-0">
        <WinePrezLogo />
      </span>

      <h1
        className={`font-cinzel relative text-5xl lg:text-8xl text-center mt-10 lg:mt-[calc(205px-176px)] mb-14 text-white`}
      >
        {title}
      </h1>
    </div>
  </div>
);
