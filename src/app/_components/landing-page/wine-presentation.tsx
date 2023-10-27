export function WinePrez() {
  return (
    <section className="flex flex-col gap-16">
      <div className="relative h-screen w-full flex">
        <div className="absolute h-screen w-[100%] bg-gray-400 z-[-1]" />
        <div className="h-[50vh] self-end flex flex-col gap-6 pl-12">
          <h3 className="text-4xl">VIN DE LA REGION</h3>
          <p className="text-base leading-3">
            Lorem ipsum dolor sit amet consectetur
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur
            <br />
            <br />
          </p>
        </div>
      </div>
      <WineCard />
      <WineCard />
      <WineCard />
    </section>
  );
}

function WineCard() {
  return (
    <figure className="flex flex-col gap-4 bg-gray-200 m-12 py-6">
      <div className="bg-gray-500 h-[400px] mx-16" />
      <figcaption className="flex flex-col items-center justify-center text-xs text-center">
          Lorem ipsum dolor
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur
      </figcaption>
    </figure>
  );
}
