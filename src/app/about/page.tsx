import { ComplexStories, Family, MainPrez, SimpleStories } from "./_components";

export default function Home() {
  return (
    <main className="flex flex-col lg:gap-64">
      <MainPrez />
      <SimpleStories />
      <ComplexStories />
      <Family />
    </main>
  );
}
