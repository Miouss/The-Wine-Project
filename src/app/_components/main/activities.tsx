import { LegacyImage, HistoryStyle } from "@/assets/home";

export const ActivitiesPrez = () => (
  <section className="relative h-screen w-full flex flex-col">
    <div className="absolute h-screen w-[100%] z-0">
      <LegacyImage />
    </div>
    <div className="relative font-light h-full flex">
      <div className="absolute w-full h-full  bg-gradient-to-t from-black via-transparent" />
      <div className="relative flex flex-col gap-6 lg:gap-8 px-12 lg:pl-[272px] pt-24 pb-20 text-white justify-end">
        <p className="text-2xl lg:text-3xl">
          Venez explorer l&apos;héritage viticole
          <br className="for-desktop" />
          de notre région.
        </p>
        <div className="self-end">
          <HistoryStyle nb={2} />
        </div>
      </div>
    </div>
  </section>
);
