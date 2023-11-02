import { BottleImage } from "@/assets/wine";
import { tertiary } from "@/colors";
import { cinzel } from "@/fonts";

export function WineSummary() {
  return (
    <section className="flex flex-col">
      <h2
        className={`${cinzel.className} text-5xl font-bold text-center mt-40 mb-14`}
      >
        LA CLÉ DES ROSÉES
      </h2>
      <div className="relative w-100 self-center">
        <BottleImage />
        <div
          className={`text-[${tertiary}] absolute right-0 bottom-0 translate-x-10 -translate-y-3`}
        >
          <h4 className="text-xl">8%</h4>
          <h4 className="text-xl">0.75 L</h4>
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-16 px-16">
        <h4>
          Succombez à la passion en bouteille - Ouvrez les portes de l’été grâce
          à la clé des Rosées
        </h4>
        <h3
          className={`text-[${tertiary}] ${cinzel.className} text-5xl font-bold text-center`}
        >
          80€
        </h3>
      </div>
    </section>
  );
}
