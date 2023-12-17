import { ReachUs } from "@/layouts/ReachUs";
import { PageIllustration } from "@/layouts/PageIllustration";
import { Pages } from "@/types";
import { LearnMore } from "@/layouts/LearnMore";
import { Activities } from "@/layouts/Activities";
import { Carrousel } from "@/layouts/Carrousel";

export default function Home() {
  return (
    <main className="flex flex-col gap-[clamp(200px,50vw,256px)]">
      <section className="relative flex flex-col gap-16 mb-16">
        <PageIllustration page={Pages.ACTIVITIES} />
      </section>
      <Activities />
      <Carrousel />
      <LearnMore />
      <ReachUs />
    </main>
  );
}
