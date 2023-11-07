export function Map() {
  return (
    <section className="h-screen w-screen max-w-[1040px] max-h-[600px] mb-44">
        <iframe
          className="h-full w-full"
          src="https://www.google.com/maps/embed/v1/place?q=La+Ferme+Viticole+-Clandestino,+Chemin+Monplaisir,+Saint-Rémy-de-Provence,+France&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
    </section>
  );
}
