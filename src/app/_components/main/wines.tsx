import { WineBottles, WinesType } from "..";

export const WinePrez = () => (
  <section className="flex flex-col gap-16 items-center py-48">
    {Object.values(WinesType).map((winesType, i) => (
      <WineBottles
        key={winesType}
        winesType={winesType}
        max={1}
        forceImgAtRight={i % 2 !== 0}
      />
    ))}
  </section>
);
