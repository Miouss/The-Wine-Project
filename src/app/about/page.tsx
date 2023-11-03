import { ComplexStories, Family, MainPrez, SimpleStories } from "./_components";

export default function Home() {
  return (
    <main className="flex flex-col">
      <MainPrez />
      <SimpleStories />
      <ComplexStories />
      <Family />
    </main>
  );
}
