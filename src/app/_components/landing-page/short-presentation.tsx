import { MainLogo } from "@/assets/commons";
import { PrezImage } from "@/assets/home";
import { tertiary } from "@/colors";
import { cinzel } from "@/fonts";

export function ShortPrez() {
  return (
    <section className="flex flex-col gap-16 mt-20 items-center justify-center px-12">
      <MainLogo />
      <div className="flex flex-col gap-4">
        <h2
          className={`text-2xl font-normal ${cinzel.className} text-[${tertiary}]`}
        >
          LES CLÉS DU PLAISIR
        </h2>
        <p>
          Chaque gorgée vous transporte dans un voyage sensoriel, évoquant la
          beauté de cette région tout en offrant une expérience gustative
          inoubliable.
        </p>
      </div>

      <div className="relative w-screen h-[360px]">
        <PrezImage />
      </div>
    </section>
  );
}
