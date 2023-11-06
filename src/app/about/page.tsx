import { ComplexStories, Family, Prez, SimpleStories } from "./_components";

export default function Home() {
  return (
    <main className="flex flex-col lg:gap-64">
      <Prez />
      <SimpleStories />
      <ComplexStories />
      <Family />
    </main>
  );
}
