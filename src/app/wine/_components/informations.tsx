import { tertiary } from "@/colors";

export function Informations() {
  return (
    <section className="flex flex-col px-16 gap-10">
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
  );
}

interface WineInformationsContainerProps extends React.PropsWithChildren {
  title: string;
}

const InformationsContainer = ({
  title,
  children: paragraph,
}: WineInformationsContainerProps) => (
  <div className="flex flex-col gap-4 font-light">
    <h5 className={`text-[${tertiary}] text-2xl`}>{title}</h5>
    <p>{paragraph}</p>
  </div>
);
