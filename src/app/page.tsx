import {
  ShortPrez,
  WinePrez,
  ActivitiesPrez,
  HistoryPrez,
  ExceptionPrez,
} from "./_components";

export default function Home() {
  return (
    <main className="flex flex-col">
      <ShortPrez />
      <HistoryPrez />
      <WinePrez />
      <ActivitiesPrez />
      <ExceptionPrez />
    </main>
  );
}
