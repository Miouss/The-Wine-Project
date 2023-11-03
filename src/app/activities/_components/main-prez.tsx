import { WinePrezLogo } from "@/assets/wines";
import { PrezImage } from "@/assets/activities";
import { cinzel } from "@/fonts";
import { DivAbsoluteFullParent } from "@/styled-components";

export function MainPrez() {
  return (
    <section className="relative flex flex-col gap-16 h-[calc(100vh-70px)] mb-16">
      <DivAbsoluteFullParent>
        <PrezImage />
      </DivAbsoluteFullParent>
      <div className="relative flex justify-center pt-32">
        <span className="absolute z-0">
          <WinePrezLogo />
        </span>

        <h1
          className={`${cinzel.className} font-bold relative text-5xl text-center mt-10 mb-14 text-white`}
        >
          ACTIVITÉS
        </h1>
      </div>
    </section>
  );
}
