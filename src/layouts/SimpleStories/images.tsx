import Image from "next/image";

const folder = "/images/SimpleStories";

export const ManImage = () => (
  <>
    <Image
      className="for-mobile"
      src={`${folder}/the-man.png`}
      fill={true}
      alt={"A man from behind, looking left, grayscale"}
      style={{ objectFit: "cover", filter: "brightness(0.5)" }}
    />

    <Image
      className="for-desktop"
      src={`${folder}/the-man-desktop.png`}
      fill={true}
      alt={"A man from behind, looking left, grayscale"}
      style={{ objectFit: "cover", filter: "brightness(0.5)" }}
    />
  </>
);

export const LegacyImage = () => (
  <>
    <Image
      className="for-mobile"
      src={`${folder}/the-legacy.png`}
      fill={true}
      alt={
        "1 bottle of wine at the foreground, 1 glass of wine at the background, in a dark room, grayscale"
      }
      style={{ objectFit: "cover", filter: "brightness(0.5)" }}
    />
    <Image
      className="for-desktop"
      src={`${folder}/the-legacy-desktop.png`}
      fill={true}
      alt={
        "1 bottle of wine at the foreground, 1 glass of wine at the background, in a dark room, grayscale"
      }
      style={{ objectFit: "cover", filter: "brightness(0.5)" }}
    />
  </>
);
