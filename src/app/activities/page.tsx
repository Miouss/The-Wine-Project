import { Activities, Carrousel, LearnMore, Prez, ReachUs } from "./_components";

export default function Home() {
  return (
    <main className="flex flex-col gap-[clamp(200px,50vw,256px)]">
      <Prez />
      <Activities />
      <Carrousel />
      <LearnMore />
      <ReachUs />
    </main>
  );
}
