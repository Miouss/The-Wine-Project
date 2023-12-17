
import { Map } from "@/layouts/Map";
import { Contacts } from "@/layouts/Contacts";

export default function Contact() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Contacts />
      <Map />
    </main>
  );
}
