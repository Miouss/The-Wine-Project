import {
  Contacts,
  Map,
  FAQ,
} from "./_components";

export default function Contact() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Contacts />
      <Map />
      {/* <FAQ /> */}
    </main>
  );
}
