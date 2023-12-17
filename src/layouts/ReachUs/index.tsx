import { DivGradient } from "@/components/div-gradient";
import { ReachUsImage, WhiteLineImage } from "./images";

export const ReachUs = () => (
  <section className="relative h-screen w-full flex flex-col">
    <div className="absolute h-screen w-[100%] z-0 bg-black">
      <ReachUsImage />
    </div>
    <DivGradient className="relative w-full h-full via-transparent">
      <div className="h-full max-w-[512px] text-2xl font-light flex flex-col gap-6 px-12 pt-24 text-white justify-end pb-20">
        <p>Contactez-nous pour vivre une expérience exceptionnelle.</p>
        <div className="self-end">
          <WhiteLineImage />
        </div>
      </div>
    </DivGradient>
  </section>
);
