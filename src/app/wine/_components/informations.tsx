import { ProcessImage, TchinDesktopImage } from "@/assets/wine";

export const Informations = () => (
  <>
    <section className="for-mobile flex flex-col px-16 gap-10 py-20">
      <InformationsContainer title={"Information"}>
        Ce vin rosé est d&apos;une légèreté rafraîchissante, avec des arômes
        subtils de fruits rouges et une acidité vive. <br /> <br /> Il est
        parfait pour une dégustation décontractée par une chaude journée
        d&apos;été.
      </InformationsContainer>
      <InformationsContainer title={"Éléments de Terroir"}>
        Les raisins pour ce vin rosé proviennent de vignes situées sur des
        collines exposées au soleil dans la région de Provence. Le sol
        argilo-calcaire, la brise marine et les journées ensoleillées de la
        Méditerranée confèrent au vin sa minéralité et son élégance typique de
        la Provence
      </InformationsContainer>
    </section>

    <section className="for-desktop relative flex flex-col gap-60 items-center">
      <div className="flex justify-between items-center w-[95%] self-end">
        <InformationsContainerDesktop
          title={"Information"}
          className="self-start pt-32"
        >
          Ce vin rosé est d&apos;une légèreté rafraîchissante, avec des arômes
          subtils de fruits rouges et une acidité vive. <br /> <br /> Il est
          parfait pour une dégustation décontractée par une chaude journée
          d&apos;été.
        </InformationsContainerDesktop>

        <div className="relative w-[759px] h-[690px]">
          <TchinDesktopImage />
        </div>
      </div>

      <div className="absolute flex flex-col left-1 top-[514px] gap-16 w-[46%]">
        <div className="relative z-0 h-[256px] w-[512px]">
          <ProcessImage />
        </div>
        <InformationsContainerDesktop
          title={"Éléments de Terroir"}
          className="self-end"
        >
          Les raisins pour ce vin rosé proviennent de vignes situées sur des
          collines exposées au soleil dans la région de Provence. <br /> <br />
          Le sol argilo-calcaire, la brise marine et les journées ensoleillées
          de la Méditerranée confèrent au vin sa minéralité et son élégance
          typique de la Provence
        </InformationsContainerDesktop>
      </div>

      <div className="flex self-end justify-between w-[80%] pr-32">
        <InformationsContainerDesktop
          title={"Processus"}
          className={"self-end pb-32"}
        >
          Ce vin rosé est élaboré par la méthode de saignée, où le moût est en
          contact avec les peaux de raisin pendant une période courte pour
          obtenir sa belle teinte rose pâle. Ensuite, la fermentation a lieu à
          température contrôlée pour conserver la fraîcheur et les arômes
          délicats.
        </InformationsContainerDesktop>

        <div className="relative z-0 h-[600px] w-[480px]">
          <ProcessImage />
        </div>
      </div>
    </section>
  </>
);

interface WineInformationsContainerProps extends React.PropsWithChildren {
  title: string;
}

const InformationsContainer = ({
  title,
  children: paragraph,
}: WineInformationsContainerProps) => (
  <div className="flex flex-col gap-4 font-light">
    <h5 className={`text-tertiary text-2xl`}>{title}</h5>
    <p>{paragraph}</p>
  </div>
);

interface WineInformationsContainerDesktopProps
  extends WineInformationsContainerProps {
  className?: string;
}

const InformationsContainerDesktop = ({
  title,
  className: additionnalClassname,
  children: paragraph,
}: WineInformationsContainerDesktopProps) => (
  <div
    className={`flex flex-col gap-4 font-light max-w-[512px] ${additionnalClassname}`}
  >
    <h5 className={`text-tertiary text-2xl`}>{title}</h5>
    <p>{paragraph}</p>
  </div>
);
