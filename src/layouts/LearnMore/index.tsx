const paragraphs = [
  "We're open for wine lovers all week from 10:00 AM to 6:00 PM. Please note that we may have different hours on holidays or for special events.",
  "Capture memories with photos during your visit. We encourage our guests to take pictures and share their experiences. Don't forget to tag us on social media!",
  "We offer special packages for parties of 10 or more. Contact us in advance to make a reservation and to learn about group discounts.",
  "Our vineyard is wheelchair accessible, and we have ramps at key locations to ensure all guests can explore our estate comfortably.",
  "Capture memories with photos during your visit. We encourage our guests to take pictures and share their experiences. Don't forget to tag us on social media!",
  "Our staff is fluent in English and French, ensuring a welcoming experience for both local and international visitors.",
  "Have questions or want to make a reservation? Feel free to contact us via our contact page.",
  "Retrouvez nous directement au domaine au 4 Avenue du Grand Champs",
];

export const LearnMore = () => (
  <section className="flex flex-col gap-16 px-16 max-w-[960px] self-center">
    <h3 className="text-3xl text-center font-cinzel">EN SAVOIR PLUS</h3>
    <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between lg:flex-wrap">
      {paragraphs.map((paragraph, i) => (
        <P key={i}>{paragraph}</P>
      ))}
    </div>
  </section>
);

const P = ({ children }: React.PropsWithChildren<{}>) => (
  <p className="font-light lg:max-w-[400px] lg:before:content-[''] lg:before:block lg:before:w-[50%] lg:before:bg-tertiary lg:before:h-[1px] lg:before:m-auto lg:before:my-10">
    {children}
  </p>
);
