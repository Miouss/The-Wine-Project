export default function Wine() {
  return (
    <main className="flex flex-col">
      <h2 className="text-4xl text-center mt-10 mb-14">Grand Vin 2020</h2>
      <div className="bg-gray-500 h-[74.6vh]" />

      <section className="px-12 pt-20">
        <WineDetails />
        <WineDetails />
        <WineDetails />
        <WineDetails />
      </section>
        <section className="h-[400px] bg-white" />
      <section>
        <WineProcessDetails />
        <WineProcessDetails />
        <WineProcessDetails />
      </section>
    </main>
  );
}

function WineDetails() {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl">Detail vin</h3>
      <p className="leading-3">
        Lorem ipsum dolor sit amet.
        <br />
        <br /> Lorem ipsum dolor sit amet.
        <br />
        <br /> Lorem ipsum dolor sit amet.
        <br />
        <br />
      </p>
    </div>
  );
}

function WineProcessDetails() {
  return (
    <div className="flex flex-col mb-40">
      <div className="bg-gray-500 h-[200px] w-full mb-4" />
      <p className="px-12">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro adipisci
        quidem sed soluta sapiente officiis iste officia facilis sit nisi magnam
        dignissimos atque, cupiditate perferendis natus consectetur voluptatum?
        Repellendus, suscipit.
      </p>
    </div>
  );
}
