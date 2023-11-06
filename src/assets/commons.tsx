import Image from "next/image";

export const MainLogo = () => (
  <Image
    src={`./assets/main-logo.svg`}
    alt={"Logo 'clés' stylish"}
    fill={true}
  />
);
