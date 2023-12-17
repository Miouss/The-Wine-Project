import Image from "next/image";

export const DistinctionImage = ({ nb = 0 }) => (
  <Image
    src={`/images/Distinctions/distinction${nb}.svg`}
    alt={"Distinction medal for win"}
    fill={true}
  />
);
