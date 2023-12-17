import { Distinctions } from "@/layouts/Distinctions";
import { Plates } from "@/layouts/Plates";
import { BottlePrez } from "@/layouts/BottlePrez";
import { BottlesType } from "@/types";
import { BigBottlePrez } from "@/layouts/BigBottlePrez";
import { Tchin } from "@/layouts/Tchin";
import { Process } from "@/layouts/Process";
import { Informations } from "@/layouts/Informations";

export default function Wine() {
  return (
    <main className="relative z-0 flex flex-col">
      <section className="flex flex-col pb-20 gap-12 justify-center items-center">
        <BigBottlePrez bottleType={BottlesType.RED} />
      </section>
      <div className={`for-mobile h-[2px] bg-tertiary mx-24`} />
      <Informations />
      <Process />
      <Distinctions />
      <Plates />
      <Tchin />
      <section className="flex flex-col gap-40 pt-16 pb-40 items-center">
        <BottlePrez bottleType={BottlesType.RED} />
        <BottlePrez bottleType={BottlesType.WHITE} />
      </section>
    </main>
  );
}
