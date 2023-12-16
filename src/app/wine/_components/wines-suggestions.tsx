import { BottlePrez } from "@/layouts/BottlePrez";
import { BottlesType } from "@/types";

export const WinesSuggestions = () => (
  <section className="flex flex-col gap-40 pt-16 pb-40 items-center">
    <BottlePrez bottleType={BottlesType.RED} />
    <BottlePrez bottleType={BottlesType.WHITE} />
  </section>
);
