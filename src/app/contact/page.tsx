import { ContactItem, ContactList, OtherContactItem, OtherContactList } from "./_components";

export default function Contact() {
  return (
    <main className="flex flex-col justify-center items-center">
      <section className="flex flex-col h-[90vh] pb-6 px-12">
        <h1 className="text-3xl mt-[10vh] text-center">Contact</h1>

        <ContactList>
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
        </ContactList>
        <p className="self-end">
          Lorem ipsum dolor sit, amet adipisicing.
          <br /> Sed corporis vitae dolore laborum.
        </p>
      </section>
      <section>
        <div className="h-screen w-screen bg-gray-500" />
      </section>
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
