import { DivGradient } from "@/components/DivGradient";
import { ProcessImage } from "./images";

export function Process() {
  return (
    <section className="for-mobile relative flex h-[100vh]">
      <div className="absolute z-0 h-full w-full">
        <ProcessImage />
      </div>
      <DivGradient className="self-end relative px-16 pb-20 flex flex-col gap-4 text-white via-transparent">
        <h4 className={`font-cinzel text-2xl`}>PROCESSUS</h4>
        <p className="font-light">
          Ce vin rosé est élaboré par la méthode de saignée, où le moût est en
          contact avec les peaux de raisin pendant une période courte pour
          obtenir sa belle teinte rose pâle. Ensuite, la fermentation a lieu à
          température contrôlée pour conserver la fraîcheur et les arômes
          délicats.
        </p>
      </DivGradient>
    </section>
  );
}
