import { BottlePrez, BottlesType } from "@/layouts/BottlePrez";

export const WinePrez = () => (
  <section className="flex flex-col gap-16 items-center py-48">
    <BottlePrez bottleType={BottlesType.PINK} />
    <BottlePrez bottleType={BottlesType.RED} isImgAtRight={true} />
    <BottlePrez bottleType={BottlesType.WHITE} />
  </section>
);
