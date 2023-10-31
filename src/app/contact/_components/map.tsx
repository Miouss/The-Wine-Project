export function Map() {
  return (
    <section className="h-screen w-screen">
      <div id="my-map-display" style={{ height: "100%", width: "100%" }}>
        <iframe
          style={{ height: "100%", width: "100%", border: "0" }}
          src="https://www.google.com/maps/embed/v1/place?q=La+Ferme+Viticole+-Clandestino,+Chemin+Monplaisir,+Saint-Rémy-de-Provence,+France&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
    </section>
  );
}
