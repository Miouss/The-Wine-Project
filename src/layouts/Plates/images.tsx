import Image from "next/image";

export const PlateImage = ({ nb = 0 }) => (
  <Image
    src={`/images/Plates/plate${nb}.jpg`}
    alt={"Plate"}
    fill={true}
    style={{ objectFit: "cover" }}
  />
);
