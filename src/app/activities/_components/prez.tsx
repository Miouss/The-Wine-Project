import { PrezImage } from "@/assets/activities";
import { DivFullscreenWithLogo } from "@/components/div-fullscreen";

export const Prez = () => (
  <section className="relative flex flex-col gap-16 mb-16">
    <DivFullscreenWithLogo bgImage={<PrezImage />} title={"ACTIVITÉS"} />
  </section>
);
