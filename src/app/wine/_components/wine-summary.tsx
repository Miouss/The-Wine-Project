import { BigBottlePrez } from "@/layouts/BigBottlePrez";
import { BottlesType } from "@/types";


export function WineSummary() {
  return (
    <section className="flex flex-col pb-20 gap-12 justify-center items-center">
      <BigBottlePrez bottleType={BottlesType.RED} />
    </section>
  );
}
