import { BottleImage } from "@/assets/wine";


export function WineSummary() {
  return (
    <section className="flex flex-col pb-20 gap-12 justify-center items-center">
      <div className="relative w-[186px] lg:w-[313.8px] h-[559px] lg:h-[800px]">
        <BottleImage />
        <h4
          className={`flex flex-col text-tertiary absolute right-0 bottom-0 translate-x-10 lg:translate-x-20 -translate-y-3 lg:-translate-y-6 text-xl lg:text-3xl`}
        >
          <span>8%</span>
          <span>0.75 L</span>
        </h4>
      </div>
      <h2 className={`font-cinzel text-5xl lg:text-6xl text-center`}>
        LA CLÉ DES ROSÉES
      </h2>
      <h3 className="flex flex-col gap-6 lg:gap-16 px-16 lg:text-2xl">
        <span>
          Succombez à la passion en bouteille - Ouvrez les portes de l&apos;été
          grâce à la clé des Rosées
        </span>
        <span
          className={`text-tertiary font-cinzel text-5xl font-bold text-center px-16`}
        >
          80€
        </span>
      </h3>
    </section>
  );
}
