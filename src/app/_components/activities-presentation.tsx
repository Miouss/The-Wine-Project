import { LegacyImage, HistoryStyle } from "@/assets/home";

export function ActivitiesPrez() {
  return (
    <section className="relative h-screen w-full flex flex-col mt-72">
      <div className="absolute h-screen w-[100%] z-0">
        <LegacyImage />
      </div>
      <div className="relative text-2xl font-light h-screen flex flex-col gap-6 px-12 pt-24 text-white justify-end pb-20">
        <p>
          Venez explorer <br />
          l&apos;héritage viticole <br />
          de notre région.
        </p>
        <div className="self-end">
          <HistoryStyle nb={2} />
        </div>
      </div>
    </section>
  );
}
