import { MainLogo } from "@/assets/commons";
import { PrezImageMobile } from "@/assets/home";

export const PrezMobile = () => (
  <section className="for-mobile flex flex-col gap-16 items-center justify-center">
    <div className="relative w-[137px] h-[63px] mt-32 mb-16">
      <MainLogo />
    </div>
    <div className="flex flex-col gap-4 px-16">
      <h2 className={`text-2xl font-normal font-cinzel text-tertiary`}>
        LES CLÉS DU PLAISIR
      </h2>
      <p>
        Chaque gorgée vous transporte dans un voyage sensoriel, évoquant la
        beauté de cette région tout en offrant une expérience gustative
        inoubliable
      </p>
    </div>

    <div className="relative w-screen h-[360px]">
      <PrezImageMobile />
    </div>
  </section>
);
