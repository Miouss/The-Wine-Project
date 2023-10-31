import {
  Contacts,
  Map,
  OtherContactItem,
  OtherContactList,
} from "./_components";

export default function Contact() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Contacts />
      <Map />
      <section className="flex flex-col py-36 px-16 gap-8">
        <h3 className="text-3xl">Autres Contact</h3>
        <OtherContactList>
          <OtherContactItem />
          <OtherContactItem />
          <OtherContactItem />
          <OtherContactItem />
        </OtherContactList>
      </section>
    </main>
  );
}
