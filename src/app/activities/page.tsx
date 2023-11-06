import { Activities, Prez, ReachUs } from "./_components";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Prez />
      <Activities />
      <ReachUs />
    </main>
  );
}
