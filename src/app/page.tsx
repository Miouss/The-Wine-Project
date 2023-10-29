import { ShortPrez, WinePrez, ActivitiesPrez } from "./_components";

export default function Home() {
  return (
    <main className="flex flex-col">
      <ShortPrez />
      <WinePrez />
      <ActivitiesPrez />
    </main>
  );
}
