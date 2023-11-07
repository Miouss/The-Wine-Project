import { PhoneIcon, MailIcon, LinkedinIcon } from "@/assets/contact";


export function Contacts() {
  return (
    <section className="flex flex-col h-[calc(100vh-70px)] pb-6 px-12 pt-32">
      <h1
        className={`font-cinzel text-5xl lg:text-8xl lg:leading-[129.41px] text-center`}
      >
        Contact
      </h1>
      <p className="for-desktop text-tertiary text-center lg:w-[512px]">
        The customer support is open from Monday to Friday, from 9 am to 5 pm.
        Our response time is a maximum of two business days.
      </p>
      <ContactList>
        <ContactItem Icon={<PhoneIcon />} label="07 45 58 95 25" />
        <ContactItem Icon={<MailIcon />} label="vins3cles@gmail.com" />
        <ContactItem Icon={<LinkedinIcon />} label="3cles" />
      </ContactList>
      <h3 className="self-end lg:self-center text-2xl text-center">
        4 Avenue du Grand Champs
      </h3>
    </section>
  );
}

const ContactItem = ({ Icon, label }: { Icon: JSX.Element; label: string }) => (
  <li className="flex gap-6 items-center">
    <div className="w-10 h-10 flex justify-center">{Icon}</div>
    <h3>{label}</h3>
  </li>
);

const ContactList = ({ children }: React.PropsWithChildren) => (
  <div className="flex-1 flex flex-col gap-6 items-center lg:w-[512px]">
    <ul className="pt-[103px] lg:pt-[56px] flex flex-wrap flex-col lg:flex-row justify-between gap-y-6">
      {children}
    </ul>
  </div>
);
