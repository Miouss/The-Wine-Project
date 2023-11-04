import Image from "next/image";

const footerFolder = "/assets/footer";

export const FooterLogo = () => (
  <Image
    src={`${footerFolder}/logo.svg`}
    width={128}
    height={128}
    alt={"Logo 'clés' stylish"}
  />
);

export const Distinctions = () => {
  const nbDistinctions = 4;

  return (
    <ol className="h-full w-full flex gap-4">
      {Array.from({ length: nbDistinctions }, (_, i) => (
        <div key={i} className="relative w-10 h-10">
          <Image
            src={`${footerFolder}/distinction${i}.svg`}
            fill={true}
            alt={`Logo distinction ${i}`}
          />
        </div>
      ))}
    </ol>
  );
};

export const Socials = () => {
  const nbSocials = 4;

  return (
    <ol className="flex flex-wrap justify-around gap-4">
      {Array.from({ length: nbSocials }, (_, i) => (
        <div
          key={i}
          className="flex-1 flex justify-center w-10 h-10 "
          style={{ borderBottom: "1px solid white", paddingBottom: "4px" }}
        >
          <Image
            src={`${footerFolder}/socials${i}.svg`}
            width={24}
            height={24}
            alt={`Logo distinction ${i}`}
          />
        </div>
      ))}
    </ol>
  );
};
