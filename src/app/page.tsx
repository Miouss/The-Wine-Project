import { ActivitiesPrez } from "@/layouts/ActivitiesPrez";
import { BottlePrez } from "@/layouts/BottlePrez";
import { CompanyPrez } from "@/layouts/CompanyPrez";
import { ExceptionsPrez } from "@/layouts/ExceptionsPrez";
import { HistoryPrez } from "@/layouts/HistoryPrez";
import { BottlesType } from "@/types";

export default function Home() {
  return (
    <main className="flex flex-col">
      <CompanyPrez />
      <HistoryPrez />
      <section className="flex flex-col gap-16 items-center py-48">
        <BottlePrez bottleType={BottlesType.PINK} />
        <BottlePrez bottleType={BottlesType.RED} isImgAtRight={true} />
        <BottlePrez bottleType={BottlesType.WHITE} />
      </section>
      <ActivitiesPrez />
      <ExceptionsPrez />
    </main>
  );
}
