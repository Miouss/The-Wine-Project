import {
  WineCard,
  WineDescription,
  WineDetails,
  WineHeader,
  WineImage,
} from "../_components";

export default function Wines() {
  return (
    <main className="flex flex-col">
      <h1 className="text-4xl text-center mt-10 mb-14">Wines</h1>

      <WineCard>
        <WineHeader />
        <WineDescription>
          <WineImage />
          <WineDetails />
        </WineDescription>
      </WineCard>

      <WineCard>
        <WineHeader />
        <WineDescription>
          <WineImage />
          <WineDetails />
        </WineDescription>
      </WineCard>

      <WineCard>
        <WineHeader />
        <WineDescription>
          <WineImage />
          <WineDetails />
        </WineDescription>
      </WineCard>

      <WineCard>
        <WineHeader />
        <WineDescription>
          <WineImage />
          <WineDetails />
        </WineDescription>
      </WineCard>
    </main>
  );
}
