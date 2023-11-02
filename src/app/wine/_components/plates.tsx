import { PlateImage } from "@/assets/wine";
import { tertiary } from "@/colors";
import { cinzel } from "@/fonts";

export function Plates() {
  return (
    <section className="text-center flex flex-col gap-8">
      <h5 className={`${cinzel.className} font-bold text-3xl`}>
        QUELQUES PLATS
      </h5>
      <div className="flex flex-col text-left">
        <Plate
          title={"Sangria au Rosé"}
          ingredients={[
            "1 bouteille de vin rosé",
            "1/2 tasse de brandy",
            "1/4 de tasse de liqueur d'orange",
            "1/4 de tasse de sucre",
            "1 orange, coupée en tranches",
            "1 citron, coupé en tranches",
            "1 pomme, coupée en dés",
            "1 pêche, coupée en dés",
            "2 tasses d'eau gazeuse",
          ]}
        >
          Mélangez le vin, le brandy, la liqueur d&apos;orange et le sucre dans
          un pichet. Ajoutez les fruits et réfrigérez pendant quelques heures.
          Juste avant de servir, ajoutez de l&apos;eau gazeuse pour une touche
          pétillante.
        </Plate>
        <Plate
          title={"Gazpacho au Rosé"}
          ingredients={[
            "1 bouteille de vin rosé",
            "4 tomates, pelées et hachées",
            "1 concombre, pelé et haché",
            "1/4 de tasse de sucre",
            "1 poivron rouge, haché",
            "1 oignon rouge, haché",
            "2 gousses d'ail, hachées",
            "Jus d'un citron",
            "2 cuillères à soupe d'huile d'olive",
            "Sel et poivre, au goût",
          ]}
        >
          Mélangez tous les ingrédients dans un mixeur jusqu&apos;à obtenir une
          consistance lisse. Réfrigérez pendant quelques heures avant de servir.
          Ce gazpacho au rosé est parfait pour les journées chaudes d&apos;été.
        </Plate>
        <Plate
          title={"Glace au Rosé"}
          ingredients={[
            "1 bouteille de vin rosé",
            "1 tasse de sucre",
            "1/2 tasse d'eau",
          ]}
        >
          Mélangez le sucre et l&apos;eau dans une casserole et portez à
          ébullition. Laissez refroidir, puis ajoutez le vin rosé. Versez le
          mélange dans une sorbetière et suivez les instructions du fabricant.
          Une fois prête, servez cette glace au vin rosé pour un dessert
          rafraîchissant.
        </Plate>
      </div>
    </section>
  );
}

interface PlateProps extends React.PropsWithChildren {
  title: string;
  ingredients: string[];
  imgNb?: number;
}

const Plate = ({
  title,
  ingredients,
  children: description,
  imgNb = 0,
}: PlateProps) => (
  <div className="flex flex-col gap-10 font-light pb-20">
    <div className="relative w-full h-[200px]">
      <PlateImage nb={imgNb} />
    </div>
    <div className="flex flex-col gap-4 px-16">
      <h5 className={`text-[${tertiary}] text-2xl`}>{title}</h5>
      <div className="flex flex-col gap-4">
        <div>
          <h6>Ingrédients :</h6>
          <ul className="list-disc pl-20">
            {ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <p className="font-light">{description}</p>
      </div>
    </div>
  </div>
);
