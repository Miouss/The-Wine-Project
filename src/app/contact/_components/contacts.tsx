import { PhoneIcon, MailIcon, LinkedinIcon } from "@/assets/contact";
import { cinzel } from "@/fonts";

export function Contacts() {
  return (
    <section className="flex flex-col h-[calc(100vh-70px)] pb-6 px-12 pt-32">
      <h1 className={`${cinzel.className} font-bold text-5xl text-center`}>
        Contact
      </h1>

      <ContactList>
        <ContactItem Icon={<PhoneIcon />} label="07 45 58 95 25" />
        <ContactItem Icon={<MailIcon />} label="vins3cles@gmail.com" />
        <ContactItem Icon={<LinkedinIcon />} label="3cles" />
      </ContactList>
      <h3 className="self-end text-2xl text-center">
        4 Avenue du Grand Champs
      </h3>
    </section>
  );
}

const ContactItem = ({ Icon, label }: { Icon: JSX.Element; label: string }) => (
  <li className="flex gap-6">
    <div className="w-10 h-10 flex justify-center">{Icon}</div>
    <h3 className="flex items-center">{label}</h3>
  </li>
);

const ContactList = ({ children }: React.PropsWithChildren) => (
  <div className="flex-1 flex flex-col gap-6 items-center mt-24 pt-6">
    <ul>{children}</ul>
  </div>
);
