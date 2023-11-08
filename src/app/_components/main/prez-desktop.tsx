import { MainLogo } from "@/assets/commons";
import {
  HistoryDesktopImage,
  HistoryStyle,
  PrezImageDesktop,
} from "@/assets/home";

export const PrezDesktop = () => (
  <section className="for-desktop relative flex flex-col">
    <div className="flex">
      <div className="flex-1 flex flex-col gap-10 pl-40 pr-16 self-center">
        <div className="relative w-[270px] h-[128px]">
          <MainLogo />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className={`text-2xl font-normal font-cinzel text-tertiary`}>
            LES CLÉS DU PLAISIR
          </h2>
          <p>
            Chaque gorgée vous transporte dans un voyage sensoriel, évoquant la
            beauté de cette région tout en offrant une expérience gustative
            inoubliable
          </p>
        </div>
      </div>

      <div className="relative flex-1 flex h-[800px] justify-center items-center">
        <div className="absolute h-[650px] w-[650px] rounded-full bg-wine-pink -translate-y-14" />
        <div className="absolute w-[313px] h-[800px] -translate-y-14">
          {" "}
          <PrezImageDesktop />
        </div>
      </div>
    </div>
    <div className="relative flex flex-col h-[852px] w-[100%] self-center">
      <div className="absolute h-[100%] w-[100%]">
        <HistoryDesktopImage />
      </div>
      <div className={`relative flex flex-col gap-6 text-right`}>
        <div className="w-[90%]">
          <h3 className={`text-6xl font-cinzel font-normal gap-16`}>
            Une Histoire,
            <br /> Un Homme,
            <br /> Un Héritage
          </h3>
        </div>
        <div className="w-[90%] self-center">
          <div className="flex flex-col gap-10 w-[403px]">
            <p className="text-xl font-light">
              La lueur dorée du soleil couchant baignait les vignes
              d&apos;Avignon. Chaque grappe de raisin était un bijou mûri par la
              tradition, prête à raconter les secrets de la Provence à qui
              savait les écouter.
            </p>
            <div className="self-end">
              <HistoryStyle />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
