import Image from "next/image";

export const FamilyImage = ({ nb = 0 }) => (
  <Image
    src={`/images/Family/${nb}.jpg`}
    fill={true}
    alt={"Family member of De Vir"}
    style={{ objectFit: "cover" }}
  />
);
