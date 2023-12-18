import { BlackLineImage, ManHorizonImage } from "./images";

export const HistoryPrez = () => (
  <section className="for-mobile relative h-screen w-full flex flex-col">
    <div className="absolute h-screen w-[100%]">
      <ManHorizonImage />
    </div>
    <div className={`relative h-[50vh] flex flex-col gap-6 px-12 pt-24`}>
      <h3 className={`text-4xl font-cinzel font-normal`}>
        Une Histoire,
        <br /> Un Homme,
        <br /> Un Héritage
      </h3>
      <p>
        La lueur dorée du soleil couchant baignait les vignes d&apos;Avignon.
        Chaque grappe de raisin était un bijou mûri par la tradition, prête à
        raconter les secrets de la Provence à qui savait les écouter.
      </p>
      <div className="self-end">
        <BlackLineImage />
      </div>
    </div>
  </section>
);
