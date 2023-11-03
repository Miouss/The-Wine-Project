import { Activities, MainPrez, ReachUs } from "./_components";

export default function Home() {
  return (
    <main className="flex flex-col">
      <MainPrez />
      <Activities />
      <ReachUs />
    </main>
  );
}
