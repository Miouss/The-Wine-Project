import Image from "next/image";

const folder = "/images/Contacts";

export const PhoneIcon = () => (
  <Image
    src={`${folder}/phone-icon.svg`}
    alt={"phone icon"}
    width={21.53}
    height={23}
  />
);

export const MailIcon = () => (
  <Image
    src={`${folder}/mail-icon.svg`}
    alt={"mail icon"}
    width={26.67}
    height={20}
  />
);

export const LinkedinIcon = () => (
  <Image
    src={`${folder}/linkedin-icon.svg`}
    alt={"linkedin icon"}
    width={27.21}
    height={26}
  />
);
