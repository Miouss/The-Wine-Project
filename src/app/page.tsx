import {
  Prez,
  WinePrez,
  ActivitiesPrez,
  HistoryPrez,
  ExceptionPrez,
} from "./_components";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Prez />
      <HistoryPrez />
      <WinePrez />
      <ActivitiesPrez />
      <ExceptionPrez />
    </main>
  );
}
