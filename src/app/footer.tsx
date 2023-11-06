import { Distinctions, FooterLogo, Socials } from "@/assets/footer";

export function Footer() {
  return (
    <footer className="relative px-16 lg:px-40 pt-8 lg:pt-16 py-2 lg:py-4 gap-10 lg:gap-16 flex flex-col items-center bg-footer bg-cover text-white font-light">
      <div className="for-mobile flex justify-center">
        <FooterLogo />
      </div>

      <div className="for-desktop absolute top-0 left-0 flex w-full justify-center mt-[85px]">
        <div>
          <FooterLogo />
        </div>
      </div>

      <div className="lg:w-full flex flex-col lg:flex-row lg:justify-between gap-10">
        <Partners />
        <Mentions />
      </div>

      <div className="flex flex-col gap-10 lg:gap-8">
        <FindUs />
        <Legals />
      </div>
    </footer>
  );
}

function Partners() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h4 className="text-2xl">Partenaires</h4>
        <ol className="flex flex-col gap-2">
          <ul>Vignoble de Provence</ul>
          <ul>Ville d&apos;Avignon </ul>
          <ul>Régions PACA</ul>
          <ul>Cartes des vins</ul>
        </ol>
      </div>
    </section>
  );
}
function Mentions() {
  return (
    <div className="flex flex-col lg:flex-col gap-4">
      <h4 className="text-xl">Nos Distinctions</h4>
      <Distinctions />
    </div>
  );
}

function Legals() {
  return (
    <div className="flex flex-col items-center text-xs">
      <h5>Créé par la Team Rocket</h5>
      <h5>Copyright © 2023 | 3 Clés</h5>
    </div>
  );
}

function FindUs() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h5 className="text-xs">Retrouvez-nous</h5>
      <Socials />
    </div>
  );
}
