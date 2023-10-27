export function Footer() {
  return (
    <footer className="h-[400px] px-16 pt-8 flex flex-col gap-[5vh]">
      <Contact />
      <Mentions />
      <Socials />
      <Legals />
    </footer>
  );
}

function Contact() {
  return (
    <section className="flex flex-col gap-10">
      <div className=" self-center rounded-full w-[200px] h-[200px] bg-gray-500" />
      <div className="flex flex-col gap-4">
        <h4 className="text-xl">Contact</h4>
        <p className="text-sm leading-3">
          Lorem ipsum dolor sit amet co <br /> <br />
          Lorem ipsum dolor sit amet co <br /> <br />
          Lorem ipsum dolor sit amet co <br /> <br />
          Lorem ipsum dolor sit amet co <br /> <br />
        </p>
      </div>
    </section>
  );
}

function Mentions() {
  return (
    <section className="flex flex-wrap justify-between gap-y-3">
      <div className="w-[80px] h-[40px] bg-gray-500" />
      <div className="w-[80px] h-[40px] bg-gray-500" />
      <div className="w-[80px] h-[40px] bg-gray-500" />
      <div className="w-[80px] h-[40px] bg-gray-500" />
    </section>
  );
}

function Legals() {
  return (
    <section className="flex flex-col items-center text-xs">
      <h5>Legal Mentions</h5>
      <h5>Copyright</h5>
    </section>
  );
}

function Socials() {
  return (
    <section className="flex flex-col justify-center items-center gap-1 ">
      <h5 className="text-xs">Socials</h5>
      <div className="flex justify-between gap-4">
        <div className="w-[32px] h-[32px] bg-gray-500" />
        <div className="w-[32px] h-[32px] bg-gray-500" />
        <div className="w-[32px] h-[32px] bg-gray-500" />
      </div>
    </section>
  );
}
