import { WinePrezImage } from "@/assets/wines";
import { DivFullscreenWithLogo } from "@/components/div-fullscreen";

export const MainPrez = () => (
  <section className="relative flex flex-col">
    <DivFullscreenWithLogo bgImage={<WinePrezImage />} title={"LA CAVE"} />
  </section>
);
