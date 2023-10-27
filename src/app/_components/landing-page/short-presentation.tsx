import { CiImageOn } from "react-icons/ci";

export function ShortPrez() {
  return (
    <section className="flex flex-col gap-16 mt-24 items-center justify-center px-12">
      <h1 className="text-3xl">Home</h1>
      <p className="leading-3">
        {" "}
        Lorem ipsum dolor sit amet consectetur
        <br />
        <br />
        Quam maxime amet facere sint
        <br />
        <br />
        quisquam magnam mollitia inventore
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur
        <br />
        <br />
        Quam maxime amet facere sint
        <br />
        <br />
        quisquam magnam mollitia inventore
        <br />
        <br />
      </p>
      <div className="border-2 border-black">
        <CiImageOn className="rounded-full h-[42vh] w-full" />
      </div>
    </section>
  );
}
