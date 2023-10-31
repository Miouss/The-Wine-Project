import { Distinctions, FooterLogo, Socials } from "@/assets/footer";

export function Footer() {
  return (
    <footer className="px-16 pt-8 flex flex-col gap-[5vh] bg-footer bg-cover text-white font-light">
      <div className="flex justify-center">
        <FooterLogo />
      </div>

      <Partners />
      <Mentions />
      <FindUs />
      <Legals />
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
    <section className="flex flex-wrap justify-between gap-y-3">
      <h4 className="text-xl">Nos Distinctions</h4>
      <Distinctions />
    </section>
  );
}

function Legals() {
  return (
    <section className="flex flex-col items-center text-xs">
      <h5>Créé par la Team Rocket</h5>
      <h5>Copyright © 2023 | 3 Clés</h5>
    </section>
  );
}

function FindUs() {
  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <h5 className="text-xs">Retrouvez-nous</h5>
      <Socials />
    </section>
  );
}
