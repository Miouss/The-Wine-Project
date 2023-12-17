import Image from "next/image";

export const ActivityImage = ({ nb = 0 }) => (
  <Image
    src={`/images/Activities/activity${nb}.png`}
    alt={"An activity"}
    fill={true}
    style={{ objectFit: "cover" }}
  />
);

export const BlackLineImage = () => (
  <Image
    src={`/images/styles/black-line-stylish.svg`}
    width={131}
    height={24}
    alt={"black line stylish"}
  />
);
